import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerBlog = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 1rem 2rem;
  margin: -6rem auto;
`
export const ContentSearch = styled.form`
  margin-top: 6rem;

  input {
    width: 100%;
    background-color: ${props => props.theme.input};
    border: 1px solid ${props => props.theme.border};
    color: ${props => props.theme.text};
    padding: 1rem 0.875rem;
    border-radius: 6px;

    &::placeholder {
      color: ${props => props.theme.label};
    }
  }
`

export const HeaderSearch = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;

  span {
    font-size: 0.875rem;
    color: ${props => props.theme.span};
  }
`

export const ListPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`