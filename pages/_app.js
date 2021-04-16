import { LoadingContextProvider } from '../context/loading';

import '../styles/globals.css';

// import config from 'react-reveal/globals';
// config({ ssrFadeout: true });

function MyApp({ Component, pageProps }) {
	return (
		<LoadingContextProvider>
			<Component {...pageProps} />
		</LoadingContextProvider>
	);
}

export default MyApp;
