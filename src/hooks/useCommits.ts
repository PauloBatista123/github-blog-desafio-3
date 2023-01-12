import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";
import {useContextSelector} from 'use-context-selector'

export function useCommits(){
  const commits = useContextSelector(GithubContext, (context) => {return context.commits});
  const searchCommits = useContextSelector(GithubContext, (context) => {return context.searchCommits});

  return {commits, searchCommits};
}