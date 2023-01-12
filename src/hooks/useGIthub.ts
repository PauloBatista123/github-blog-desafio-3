import { GithubContext, Repository } from "../context/GithubContext";
import { dateFormatter } from "../utils/formatters";
import moment from 'moment'
import {useContextSelector} from 'use-context-selector'

moment.locale('pt-BR');

export function useGithub(){
  const repos = useContextSelector(GithubContext, (context) => { return context.repos});
  const searchRepositories = useContextSelector(GithubContext, (context) => { return context.searchRepositories});

  const repositories = repos?.map((repo: Repository) => {
    return {
      name: repo.name,
      description: repo.description,
      id: repo.id,
      createdAt: dateFormatter.format(new Date(repo.created_at)),
      updatedAt: dateFormatter.format(new Date(repo.updated_at)),
      language: repo.language,
      diff: moment(new Date(repo.created_at)).fromNow(),
      fullName: repo.full_name
    }
  })
  
  return {
    repositories,
    searchRepositories
  };
}