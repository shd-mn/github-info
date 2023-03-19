import Head from 'next/head';
import dynamic from 'next/dynamic';

import Image from 'next/image';
import styles from '@/styles/Home.module.scss';
import StatsCard from '@/components/card/StatsCard';
import Search from '@/components/search/Search';
import Profile from '@/components/profile/Profile';
const NextFusionCharts = dynamic(() => import('@/components/fusioncharts/NextFusioncharts'), { ssr: false });

export default function Home() {
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
                <Search />
                <StatsCard />
                <Profile />
                <NextFusionCharts/>
            </main>
        </>
    );
}
