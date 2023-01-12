import styled from "styled-components";

export const ContainerRepository = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem 2rem;
  margin: -6rem auto;  
`

export const ContentRepository = styled.div`
  padding: 1rem 2rem;
  background-color: ${props => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 5rem;

  display: flex;
  flex-direction: column;
`
export const HeaderRepository = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  

  a {
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom 0.3s;
    
    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }
  }
`
export const TitleRepository = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.title};
`
export const InfoRepository = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;
  height: 100%;
  color: ${props => props.theme.span};
`
export const DetailRepository = styled.div`
  svg {
    margin-right: 0.5rem;
  }
`
