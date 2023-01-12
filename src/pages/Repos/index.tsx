import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faCode, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Repo } from "../../components/Repo";
import { Repository } from "../../context/GithubContext";
import { useCommits } from "../../hooks/useCommits";
import { api } from "../../lib/axios";
import { dateFormatter } from "../../utils/formatters";
import { ContainerRepository, ContentRepository, DetailRepository, HeaderRepository, InfoRepository, TitleRepository } from "./styles";

interface Repo {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    }
  }
}

export function Repos(){
  const {login, repo} = useParams();
  const {searchCommits, commits} = useCommits();
  const [infoRepo, setinfoRepo] = useState<Repository>();

  const fetchRepo = async () => {
    await searchCommits(`${login}/${repo}` ?? '');
    const response = await api.get(`repos/${login}/${repo}`).then(response => response.data);
    setinfoRepo(response);
  }

  useEffect(() => {
    fetchRepo();
    console.table(commits);
  }, []);

  return(
    <div>
      <Header />
      <ContainerRepository>
        <ContentRepository>
          <HeaderRepository>
            <a href={''}><FontAwesomeIcon icon={faChevronLeft} /> Voltar</a>
            <a href={infoRepo?.html_url}>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
          </HeaderRepository>
          <TitleRepository>
            {infoRepo?.name}
          </TitleRepository>
          <InfoRepository>
            <DetailRepository>
              <FontAwesomeIcon icon={faUser} />  
              <span>{infoRepo?.owner.login}</span> 
            </DetailRepository>
            <DetailRepository>
              <FontAwesomeIcon icon={faCalendarDay} />  
              <span>{moment(infoRepo?.created_at).toNow()}</span>
            </DetailRepository>
            <DetailRepository>
              <FontAwesomeIcon icon={faCode} />  
              <span>{infoRepo?.language}</span> 
            </DetailRepository>
          </InfoRepository>   
        </ContentRepository>   

        {commits && commits.map(commit => (
        <Repo
          key={commit.sha}
          title={commit.commit.message}
          author={commit.author.login}
          avatar_url={commit.author.avatar_url}
          createdAt={commit.commit.committer.date}          
        />
      ))}  
      </ContainerRepository>

      
    </div>
  );
}