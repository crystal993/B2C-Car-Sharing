import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Routers';
import CarListProvider from './context/CarListProvider';
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
        <title>B2C Car Sharing</title>
      </Helmet>
      <CarListProvider>
        <Reset />
        <GlobalStyle />
        <Router />
      </CarListProvider>
    </>
  );
}

export default App;
