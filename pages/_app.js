import React from 'react';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { GlobalStyle } from '../global-styles';
import NavWrapper from '../components/nav-wrapper';
import store from '../store';

const App = ({ Component, pageProps }) => {
	const history = useRouter();

	return (
		<Provider store={store}>
			<GlobalStyle />
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'
					integrity='sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU='
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap'
					rel='stylesheet'
				></link>
				<link
					rel='stylesheet'
					href='/static/fonts/font-awesome-4.7.0/css/font-awesome.css'
				></link>
				<title>Youtube</title>
			</Head>
			{history.pathname === '/' ? (
				<Component {...pageProps} />
			) : (
				<NavWrapper>
					<Component {...pageProps} />
				</NavWrapper>
			)}
		</Provider>
	);
};

export default App;
