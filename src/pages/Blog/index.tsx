import { Header } from '../../components/Header'
import { Post } from '../../components/Post'
import { Profile } from '../../components/Profile'
import { useGithub } from '../../hooks/useGIthub'
import { ContainerBlog, ContentSearch, HeaderSearch, ListPosts } from './styles'
import { useForm } from 'react-hook-form';
import * as z from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const searchSchema = z.object({
  search: z.string(),
});

type searchInputs = z.infer<typeof searchSchema>;

export function Blog() {

  const {repositories, searchRepositories} = useGithub();
  const {register, handleSubmit, formState: {isSubmitting}} = useForm<searchInputs>({
    resolver: zodResolver(searchSchema)
  });

  const handleSearch = async ({search}: searchInputs) => {
    await searchRepositories(search);
  }

  return (
    <div>
      <Header />

      <ContainerBlog>
        <Profile />

        <ContentSearch onSubmit={handleSubmit(handleSearch)}>
          <HeaderSearch>
            <label>Publicações</label>
            <span>6 publicações</span>
          </HeaderSearch>
          <input type="text" placeholder='Buscar conteúdo' {...register('search')}/>
        </ContentSearch>
      
      {!isSubmitting ? (
        <ListPosts>
          {repositories?.map(repo => (
            <Post 
              createdAt={repo.diff}
              title={repo.name}
              description={repo.description}
              key={repo.id}
              fullName={repo.fullName}
            />
          ))}
        </ListPosts>
      ): (
        <ListPosts>
          <p>Carregando...</p>
        </ListPosts>
      )}
      
      </ContainerBlog>

    </div>
  )
}
