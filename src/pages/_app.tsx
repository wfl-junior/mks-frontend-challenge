import { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { CartDrawer } from "~/components/CartDrawer";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Main } from "~/components/Main";
import { GlobalStyle } from "~/styles/global";
import { theme } from "~/styles/theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <title>MKS Frontend Challenge</title>
    </Head>

    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />
      <CartDrawer />

      <Main>
        <Component {...pageProps} />
      </Main>

      <Footer />
    </ThemeProvider>
  </Fragment>
);

export default App;
