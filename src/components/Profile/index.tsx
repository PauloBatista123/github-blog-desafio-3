import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContainerProfile, ContentProfile, InfoProfile, HeaderProfile, DetailProfile } from "./style";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup, faUser } from '@fortawesome/free-solid-svg-icons'
import {useContextSelector} from 'use-context-selector'
import { GithubContext } from "../../context/GithubContext";

export function Profile(){

  const user = useContextSelector(GithubContext, (context) => {return context.user});

  return(
    <ContainerProfile>
      <div>
        <img src={user?.avatar_url} alt="" />
      </div>
      <ContentProfile>
        <HeaderProfile>
          <span>Paulo Henrique</span>
          <a href={user?.html_url}>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </HeaderProfile>
        <p>
        {user?.bio}
        </p>
        <InfoProfile>
          <DetailProfile>
            <FontAwesomeIcon icon={faUser} />  
            <span>{user?.login}</span> 
          </DetailProfile>
          <DetailProfile>
            <FontAwesomeIcon icon={faBuilding} />  
            <span>{user?.company}</span> 
          </DetailProfile>
          <DetailProfile>
            <FontAwesomeIcon icon={faUserGroup} />  
            <span>{user?.followers} seguidores</span> 
          </DetailProfile>
        </InfoProfile>
      </ContentProfile>
    </ContainerProfile>
  )
}