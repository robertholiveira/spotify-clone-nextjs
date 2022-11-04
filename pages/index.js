import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>Hello Next World</h1>
      {session && <img src={session.user.image} />}
    </div>
  );
}
