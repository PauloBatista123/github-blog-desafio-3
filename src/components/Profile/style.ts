import styled from "styled-components";

export const ContainerProfile = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem 2rem;

  background-color: ${props => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex-direction: row;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
    margin-right: 2rem;
  }
`

export const ContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`

export const HeaderProfile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
    font-size: 1.2rem;
  }

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

  p {
    line-height: 1.6;
    text-align: justify;
  }
`

export const InfoProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-top: 1.5rem;
  height: 100%;
`

export const DetailProfile = styled.div`
  color: ${props => props.theme.subtitle};
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 0.5rem;

  span {
    padding-left: 0.5rem;
  }
`