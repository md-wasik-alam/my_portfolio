import { GlobalStateProvider } from '../context/GlobalState';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
