import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <button onClick={() => signIn("line")}>
        <img src="/line-login-button.webp" />
      </button>
    </div>
  );
};

export default Login;
