import { ContainerPost, DatePost, HeaderPost, LinkPost, TitlePost } from "./styles";

interface PostProps {
  title: string;
  createdAt: string;
  description: string;
  fullName: string;
}

export function Post({createdAt, description, title, fullName}: PostProps){  
  return(
    <LinkPost to={`repositorio/${fullName}`} replace={true}>
      <ContainerPost >
        <HeaderPost>
          <TitlePost>{title}</TitlePost>
          <DatePost>{createdAt}</DatePost>
        </HeaderPost>

        <p>
          {description ?? 'Não possui'}
        </p>
    </ContainerPost>
    </LinkPost>
  )
}