import CarProvider from '../src/stores/CarListProvider';
import { GlobalStyle } from '../src/styles/globals';
import '@fontsource/Inter/400.css';
import '@fontsource/Inter/500.css';
import '@fontsource/Inter/700.css';

function MyApp({ Component, pageProps }) {
  return (
    <CarProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </CarProvider>
  );
}

export default MyApp;
