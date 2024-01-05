import React from "react";
import Image from "next/image";
import type { followerTypes } from "@/types/followerTypes";

const Follower = ({
  followers,
  idx,
}: {
  followers: followerTypes;
  idx: number;
}) => {
  return (
    <article className="mb-3 flex gap-5">
      <p>{idx + 1}</p>
      <figure className="h-14 w-14">
        <Image
          className="rounded-full"
          src={followers.avatar_url}
          alt={followers.login}
          width={100}
          height={100}
        />
      </figure>
      <div className="followers-info">
        <h4 className="text-lg uppercase">{followers?.login}</h4>
        <a className="follow-link" href={followers.html_url} target="_blank">
          {followers.html_url}
        </a>
      </div>
    </article>
  );
};

export default Follower;
