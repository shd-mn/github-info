import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useGetGithubUserByNameQuery } from "@/redux/services/githubApi";
import { RootState } from "@/redux/store";
import Link from "next/link";

function ProfileInfo() {
  const username = useSelector((state: RootState) => state.user.username);
  const { data, isLoading } = useGetGithubUserByNameQuery(username);
  

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Link href="/dashboard" className="flex items-center gap-x-3">
      <figure className="flex h-10">
        <Image
          className="h-full w-full rounded-full object-contain"
          src={data?.avatar_url}
          alt={`Profile picture of ${data?.login}`}
          width={50}
          height={50}
        />
      </figure>
      <h3>{data.name}</h3>
    </Link>
  );
}

export default ProfileInfo;
