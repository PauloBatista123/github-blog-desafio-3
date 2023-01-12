import styled from "styled-components";
import headerImg from '../../assets/header.svg'

export const ContainerHeader = styled.div`
  background-color: ${props => props.theme.profile};
  padding: 1rem 0 2rem;
  background-image: url(${headerImg});
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContentHeader = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
`

export const ImgContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RetanguleEffect = styled.div`
  height: 52px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  background-color: rgba(20, 88, 156, 1);
  filter: blur(196px);
`