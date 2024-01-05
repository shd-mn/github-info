import React, { useEffect, useRef } from "react";
import Follower from "./Follower";
import type { followerTypes } from "@/types/followerTypes";
import Loading from "../common/Loading";

type PropTypes = {
  title: string;
  data: followerTypes[];
  followerCount: number;
  isLoading: boolean;
  isFetching?: boolean;
  page: number;
  setPage: (prev: number) => void;
};

const FollowersList = ({
  title,
  data,
  followerCount,
  isLoading,
  isFetching,
  page,
  setPage,
}: PropTypes) => {
  const per_page = 50;
  const availablePageCount = useRef(false);
  const divRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (divRef.current) {
      const { offsetHeight, scrollHeight, scrollTop } = divRef.current;
      if (
        offsetHeight + scrollTop === scrollHeight &&
        availablePageCount.current
      ) {
        setPage(page + 1);
      }
    }
  };

  useEffect(() => {
    availablePageCount.current = Math.ceil(followerCount / per_page) > page;
  }, [followerCount, page]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      className="max-h-96 overflow-y-scroll rounded-md bg-slate-700"
      ref={divRef}
      onScroll={handleScroll}
    >
      <h3 className="text-center text-2xl">{title}</h3>
      {data?.map((followers: followerTypes, idx: number) => (
        <Follower key={followers.id} followers={followers} idx={idx} />
      ))}
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default FollowersList;
