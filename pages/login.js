import Head from "next/head";

import { Login } from "@/components";

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login | Spotify </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Login />
    </>
  );
}

export default LoginPage;
