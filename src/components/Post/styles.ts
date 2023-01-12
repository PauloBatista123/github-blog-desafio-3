import { Link, LinkProps } from "react-router-dom";
import styled from "styled-components";

export const ContainerPost = styled.div`
  padding: 1.2rem;
  background-color: ${props => props.theme.post};
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border 0.2s;
  cursor: pointer;
  
  &:hover {
    border: 2px solid #3A536B;
  }
`

export const HeaderPost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
`

export const TitlePost = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: start;
    color: ${props => props.theme.title};
`

export const DatePost = styled.span`
    font-size: 0.875rem;
    color: ${props => props.theme.span};
`

export const LinkPost = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.text};
`