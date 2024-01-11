import React, { useState, FormEvent, useRef } from "react";
import { useLazySearchGithubUserQuery } from "@/redux/services/githubApi";
import { GoSearch, GoX } from "react-icons/go";
import SearchResult from "./SearchResult";

type SearchTypes = {
  refetch: () => void;
  rateLimit?: any;
};

const Search = ({ rateLimit, refetch }: SearchTypes) => {
  const [username, setUsername] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [trigger, { data, isLoading, error }] = useLazySearchGithubUserQuery();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username) {
      trigger(username);
    }
    refetch();
  };

  const handleDelete = () => {
    setUsername("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="group absolute left-1/2 top-1/2 w-[500px] -translate-x-1/2 -translate-y-1/2">
      <form
        onSubmit={handleSubmit}
        className="focus-within:border-1 relative flex w-full items-center rounded-full border-blue-400 shadow-[0px_0px_2px_#efefef]"
      >
        <input
          ref={inputRef}
          className="w-full rounded-full border-none  bg-transparent px-4 py-1 text-gray-400 outline-none"
          type="text"
          placeholder="Search github User..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="absolute right-1 flex items-center gap-2">
          <p>
            {rateLimit?.resources?.search?.remaining}/
            {rateLimit?.resources?.search?.limit}
          </p>
          {username && (
            <button type="button" className="" onClick={handleDelete}>
              <GoX />
            </button>
          )}
          <button
            type="submit"
            className="rounded-full bg-slate-900 px-1 py-1 hover:bg-blue-500"
          >
            <GoSearch className="" />
          </button>
        </div>
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
  );
};

export default Search;
