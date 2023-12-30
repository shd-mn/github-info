import React, { useState, FormEvent } from "react";
import { useLazySearchGithubUserQuery } from "@/redux/services/githubApi";
import { GoSearch } from "react-icons/go";
import SearchResult from "./SearchResult";

const Search = () => {
  const [username, setUsername] = useState("");

  const [trigger, { data, isLoading, error }] = useLazySearchGithubUserQuery();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username) {
      trigger(username);
    }
  };

  return (
    <section className="">
      <div className="group w-full">
        <form
          onSubmit={handleSubmit}
          className="relative flex w-full items-center rounded-md border-red-400 shadow-[0px_0px_1px_#fff] focus:border"
        >
          <span className="p-2">
            <GoSearch className="" />
          </span>
          <input
            className="w-full rounded-md bg-transparent px-2 py-2 text-white outline-none"
            type="text"
            placeholder="Search github user..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            type="submit"
            className="h-full rounded-md bg-blue-600 px-8 py-2 hover:bg-blue-500"
          >
            Search
          </button>
        </form>
        {error ? (
          <p className="absolute text-red-500">
            There Is No User With That Username
          </p>
        ) : (
          <p className=""></p>
        )}
        {!error && !!data?.items?.length && <SearchResult data={data} />}
      </div>
    </section>
  );
};

export default Search;
