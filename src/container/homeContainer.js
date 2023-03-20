import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/card/StatsCard';
import Search from '@/components/search/Search';
import Profile from '@/components/profile/Profile';
const NextFusionCharts = dynamic(
    () => import('@/components/fusioncharts/NextFusioncharts'),
    { ssr: false }
);
import { useGetGithubUserByNameQuery, useGetGithubUserByFollowersQuery } from '@/services/githubUser';
import { useSelector } from 'react-redux';
import Loading from '@/components/common/Loading';

export default function HomeContainer() {
    const { searchUser } = useSelector((state) => state.users);
    const { data, error, isError, isLoading } =
        useGetGithubUserByNameQuery(searchUser);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Head>
                <title>Github Info</title>
                <meta name="description" content="Find github user info" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Search isError={isError} />
                <StatsCard data={data} />
                <Profile data={data} />
                <NextFusionCharts />
            </main>
        </>
    );
}
