import { auth, firestore, googleAuthPro } from "../lib/firebase";
import googleLogo from "../public/google.png";
import { signInWithRedirect } from "firebase/auth";

export default function Enter(props) {
  const username = null;
  const user = null;
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithRedirect(auth, googleAuthPro);
  };
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={googleLogo} />
      Sing In With Google
    </button>
  );
}

function SignOutButton() {
  <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {}

// Next Auth Context
