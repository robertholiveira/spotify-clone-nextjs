import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

import "@nextcss/reset";
import "../styles/globals.css";

import { DashLayout, AuthLayout } from "components";

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();

  const Layout = pathname.includes("/dashboard") ? DashLayout : AuthLayout;

  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default App;
