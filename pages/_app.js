import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
