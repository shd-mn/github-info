import React, { useEffect } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
import StatsCard from '@/components/card/StatsCard';
import Search from '@/components/search/Search';
import Profile from '@/components/profile/Profile';
const NextFusionCharts = dynamic(() => import('@/components/fusioncharts/NextFusioncharts'), { ssr: false });
import { useGetGithubUserByNameQuery } from "@/services/githubUser";
import { useSelector } from "react-redux";

export default function HomeContainer() {

   const { searchUser } = useSelector(state => state.users);
   const { data, error, isLoading } = useGetGithubUserByNameQuery(searchUser);

   if (isLoading) {
      return <div style={{ position: "absolute", top: "50%", left: "50%" }}>Yükleniyor</div>
   }

   return <>
      {(
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
               <Search />
               <StatsCard data={data} />
               <Profile data={data} />
               <NextFusionCharts />
            </main>
         </>
      )}
   </>;
}
