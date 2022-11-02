import CarProvider from '../src/stores/CarListProvider';
import { GlobalStyle } from '../src/styles/globals';
import '@fontsource/Inter/400.css';
import '@fontsource/Inter/500.css';
import '@fontsource/Inter/700.css';
import CarDetail from './car/[id]';
import CarDetailProvider from '../src/stores/CarDetailProvider';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <CarProvider>
      <GlobalStyle />
      {getLayout(<Component {...pageProps} />)}
    </CarProvider>
  );
}

CarDetail.getLayout = function getLayout(page) {
  return <CarDetailProvider>{page}</CarDetailProvider>;
};
