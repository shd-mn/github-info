import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import StatsCard from "@/components/card/StatsCard";
import Profile from "@/components/profile/User";
const NextFusionCharts = dynamic(
  () => import("@/components/fusioncharts/NextFusionChart"),
  { ssr: false },
);

import {
  useGetGithubUserByNameQuery,
  useGetGithubUserReposQuery,
} from "@/redux/services/githubApi";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Loading from "@/components/common/Loading";
import { setUser } from "@/redux/features/userSlice";
import Followers from "@/components/followers";

export default function Dashboard() {
  const username = useSelector((state: RootState) => state.user.username);
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } =
    useGetGithubUserByNameQuery(username);
  const { data: reposData } = useGetGithubUserReposQuery({ username });

  useEffect(() => {
    dispatch(setUser(data));
  }, [isSuccess, dispatch, data]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Profile data={data} />
      <StatsCard data={data} />
      <NextFusionCharts reposData={reposData} />
      <Followers />
    </>
  );
}
