import React from 'react';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/card/StatsCard';
import Search from '@/components/search/Search';
import Profile from '@/components/profile/Profile';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/NextFusionChart'),
    { ssr: false }
);
import {
    useGetGithubUserByNameQuery,
    useGetGithubUserByFollowersQuery,
    useGetGithubUserByReposQuery,
} from '@/redux/services/githubApi';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export default function Dashboard() {
    const { searchUser } = useSelector((state: RootState) => state.users);
    const { data, isError } = useGetGithubUserByNameQuery(searchUser);
    const { data: reposData, isLoading } =
        useGetGithubUserByReposQuery(searchUser);

    return (
        <>
            {!isLoading && (
                <>
                    <Search isError={isError} />
                    <StatsCard data={data} />
                    <Profile data={data} />
                    <NextFusionCharts reposData={reposData} />
                </>
            )}
        </>
    );
}
