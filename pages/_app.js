import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";
import "react-simple-flex-grid/lib/main.css";
import "@nextcss/reset";

import "../styles/globals.css";

import { DashLayout, AuthLayout } from "@/components";

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();

  const Layout = pathname.includes("/dashboard") ? DashLayout : AuthLayout;

  return (
    <SessionProvider session={session} refetchInterval={86000}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default App;
