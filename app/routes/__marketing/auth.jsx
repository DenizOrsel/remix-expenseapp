import AuthForm from "~/components/auth/Authform";
import authStyles from "~/styles/auth.css";

export default function Auth() {
  return (
    <>
      <h1>Auth Page</h1>
      <AuthForm />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
