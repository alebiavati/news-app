import { signIn, signOut, useSession } from "../../utils/auth";

export default function Auth({ className }) {
  const [session, loading] = useSession();

  return (
    <div className={className}>
      {!loading && !session && (
        <>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {!loading && session && (
        <>
          Welcome,{" "}
          <strong>{session.given_name || session.preferred_username}</strong>{" "}
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </div>
  );
}
