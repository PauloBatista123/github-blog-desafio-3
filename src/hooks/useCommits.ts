import { useContext } from "react";
import { GithubContext } from "../context/GithubContext";

export function useCommits(){
  const {commits, searchCommits} = useContext(GithubContext);

  return {commits, searchCommits};
}