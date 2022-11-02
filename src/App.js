import GlobalStyle from './styles/GlobalStyle';
import { Reset } from 'styled-reset';
import Router from './router/Routers';
import CarListProvider from './context/CarListProvider';

function App() {
  return (
    <CarListProvider>
      <Reset />
      <GlobalStyle />
      <Router />
    </CarListProvider>
  );
}

export default App;
