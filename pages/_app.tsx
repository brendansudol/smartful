import { AppProps, Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "theme-ui";
import { ThemeGlobal } from "../components/ThemeGlobal";
import theme from "../utils/theme";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ThemeGlobal />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
