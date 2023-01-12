import { useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

interface GithubProviderProps {
  children: React.ReactNode;
}

interface User {
  login: string;
  company: string;
  followers: number;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
}

export interface Repository {
  id: number;
  description: string;
  name: string;
  created_at: string;
  language: string;
  updated_at: string;
  full_name: string;
  html_url: string;
  owner: {
    login: string;
  }
}

interface Commit {
  sha: string;
  commit: {
    message: string;
    committer: {
      date: string;
    }
  }
  author: {
    login: string;
    avatar_url: string;
  }
}

type GithubContextProps = {
  user ?: User;
  repos ?: Repository[];
  searchRepositories: (repo: string) => void;
  searchCommits: (fullName: string) => void;
  commits ?: Commit[];
}


export const GithubContext = createContext({} as GithubContextProps);

export function GithubProvider({children}: GithubProviderProps) {
  const [user, setUser] = useState<User>();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [commits, setCommits] = useState<Commit[]>([]);

  const fetchUser = useCallback(async () => {
    const user = await api.get('/users/paulobatista123').then(response => response.data);
    const repositorys = await api.get('/users/paulobatista123/repos').then(response => response.data);

    setUser(user);
    setRepos(repositorys);
  }, [])

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const searchRepositories = useCallback(async (repo: string) => {
    const result = await api.get('search/repositories', {
      params: {
        q: `user:paulobatista123 ${repo} in:name`,
      }
    }).then(response => response.data.items);

    setRepos(result);
  }, [])

  const searchCommits = useCallback(async (fullName: string) => {
    const resultCommits = await api.get(`repos/${fullName}/commits`).then(response => response.data);

    setCommits(resultCommits);
  }, []);

  return (
    <GithubContext.Provider value={{user, repos, searchRepositories, searchCommits, commits}}>
      {children}
    </GithubContext.Provider>
  );
} 