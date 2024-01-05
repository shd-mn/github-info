import React, { useState } from "react";
import FollowersList from "./FollowersList";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import {
  useGetGithubUserFollowersQuery,
  useGetGithubUserFollowingQuery,
} from "@/redux/services/githubApi";
import type { followerTypes } from "@/types/followerTypes";

function Followers() {
  const { username, user } = useSelector((state: RootState) => state.user);
  const [followersPage, setFollowersPage] = useState(1);
  const [followingPage, setFollowingPage] = useState(1);
  const [nonFollowingPage, setNonFollowingPage] = useState(1);

  const {
    data: followers,
    isLoading,
    isFetching,
  } = useGetGithubUserFollowersQuery({
    username,
    page: followersPage,
    keepPreviousData: true,
  });

  const { data: followings, isLoading: followingLoading } =
    useGetGithubUserFollowingQuery({
      username,
      page: followingPage,
    });

  const nonFollower = followings?.filter((following: followerTypes) => {
    return !followers?.some((follower: followerTypes) => {
      return follower.id === following.id;
    });
  });

  return (
    <section className="mb-12">
      <div className="grid grid-cols-3 gap-8">
        <FollowersList
          title="Followers"
          data={followers}
          followerCount={user?.followers}
          isLoading={isLoading}
          isFetching={isFetching}
          setPage={setFollowersPage}
          page={followersPage}
        />
        <FollowersList
          title="Following"
          data={followings}
          followerCount={user?.following}
          isLoading={followingLoading}
          setPage={setFollowingPage}
          page={followingPage}
        />
        <FollowersList
          title="Non-Followers"
          data={nonFollower}
          followerCount={nonFollower?.length}
          isLoading={followingLoading}
          setPage={setNonFollowingPage}
          page={nonFollowingPage}
        />
      </div>
    </section>
  );
}

export default Followers;
