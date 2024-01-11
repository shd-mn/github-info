import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setUserName } from "@/redux/features/userSlice";
import { useRouter } from "next/router";
import type { SearchTypes, User } from "@/types/searchTypes";

type PropTypes = {
  data: SearchTypes;
};

function SearchResult({ data }: PropTypes) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = (user: string) => {
    try {
      dispatch(setUserName(user));
      localStorage.setItem("user", user);
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/dashboard");
    }
  };

  const showedResult = data?.items?.length;

  return (
    <div className="relative mx-4 mt-1 hidden duration-300 group-focus-within:block">
      <div className="absolute max-h-96 w-full overflow-y-auto rounded-md bg-slate-900">
        <h3 className="mb-2 bg-slate-800 px-3 py-1">
          {data?.total_count} Total result
          {showedResult > 20 && `/ ${showedResult} result showing`}
        </h3>
        {data?.items?.map((user: User) => (
          <button
            key={user.id}
            className="flex w-full items-center gap-2 px-3 py-1 rounded-md hover:bg-blue-500"
            onClick={() => handleClick(user.login)}
          >
            <figure>
              <Image
                src={user.avatar_url}
                width={100}
                height={100}
                alt={`Profile picture of ${user.login}`}
                className="h-12 w-12 rounded-full"
              />
            </figure>
            <h3>{user?.login}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchResult;
