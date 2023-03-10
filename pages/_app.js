import { SessionProvider } from "next-auth/react";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import "@nextcss/reset";
import NProgress from "nprogress";

import "@/styles/globals.css";
import "@/styles/nprogress.css";

import useCheckMobileScreen from "@/utils/useCheckMobileScreen";
import DashLayout from "@/components/templates/DashLayout";
import AuthLayout from "@/components/templates/AuthLayout";
import MobileMessage from "@/components/organisms/MobileMessage";

function App({ Component, pageProps: { session, ...pageProps } }) {
  const { pathname } = useRouter();
  const isMobile = useCheckMobileScreen();

  const Layout = pathname.includes("/dashboard") ? DashLayout : AuthLayout;

  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());

    Router.events.on("routeChangeComplete", () => NProgress.done(false));
  });

  return (
    <SessionProvider session={session} refetchInterval={86000}>
      {isMobile ? (
        <MobileMessage />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SessionProvider>
  );
}

export default App;
