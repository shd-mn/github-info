import Head from 'next/head';
import Footer from '@/components/footer';
import React, { ReactNode } from 'react';
import Navbar from '@/components/navbar';

function Layout({ children }: { children: ReactNode }) {
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
            
            <Navbar/>
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;
