import { ContainerHeader, ContentHeader, ImgContent, RetanguleEffect } from "./styles";
import logo from '../../assets/logo.svg';

export function Header(){
  return (
    <ContainerHeader>
      <ContentHeader>
        <ImgContent>
          <img src={logo} alt="" />
        </ImgContent>
        <RetanguleEffect />
      </ContentHeader>
    </ContainerHeader>
  )
}