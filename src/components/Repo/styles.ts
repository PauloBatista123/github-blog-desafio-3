import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerRepo = styled.div`
  padding: 1.2rem;
  background-color: ${props => props.theme.post};
  border: 2px solid transparent;
  border-radius: 10px;
  transition: border 0.2s;
  cursor: pointer;
  margin: 2rem 0;
  
  &:hover {
    border: 2px solid #3A536B;
  }
`

export const HeaderRepo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
`

export const TitleRepo = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    text-align: start;
    color: ${props => props.theme.title};
`

export const DateRepo = styled.span`
    font-size: 0.875rem;
    color: ${props => props.theme.span};
`

export const LinkRepo = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.text};
`

export const InfoRepo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${props => props.theme.span};

  img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
`