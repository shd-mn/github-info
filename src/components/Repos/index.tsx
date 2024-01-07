import React, { useState } from "react";
import { useGetGithubUserReposQuery } from "@/redux/services/githubApi";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import type { RepoTypes } from "@/types/repoTypes";

function Repos() {
  const [sortByName, setSortByName] = useState("asc");
  const { username } = useSelector((state: RootState) => state.user);

  const { data: repos, isLoading } = useGetGithubUserReposQuery({
    username,
    sortByName,
  });

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div className="p-8">
      <section>
        <header>
          <input type="text" placeholder="search repo" />
        </header>

        <ul className="">
          {repos?.map((repo: RepoTypes) => (
            <li key={repo.id} className="flex flex-col bg-slate-600 py-3">
              <h2 className="text-2xl text-red-500">{repo.name}</h2>
              <h3>{repo.description}</h3>
              <p>created at{repo.created_at}</p>
              <p>updated at{repo.updated_at}</p>
              <span>
                <span className=""></span>
                <p>{repo.language}</p>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Repos;
