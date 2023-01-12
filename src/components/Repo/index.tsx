import moment from "moment";
import { dateFormatter } from "../../utils/formatters";
import { ContainerRepo, DateRepo, HeaderRepo, InfoRepo, LinkRepo, TitleRepo } from "./styles";

interface RepoProps {
  title: string;
  createdAt: string;
  author: string;
  avatar_url: string;
}

export function Repo({createdAt, title, author, avatar_url}: RepoProps){  
  return(
    <ContainerRepo >
        <HeaderRepo>
          <TitleRepo>{title}</TitleRepo>
          <DateRepo>{createdAt}</DateRepo>
        </HeaderRepo>
        <InfoRepo>
            <img src={avatar_url} alt="User" /> {author} criou em {dateFormatter.format(new Date(createdAt))}
          </InfoRepo>
    </ContainerRepo>
  )
}