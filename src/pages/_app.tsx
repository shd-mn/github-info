import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Layout from './_layout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
