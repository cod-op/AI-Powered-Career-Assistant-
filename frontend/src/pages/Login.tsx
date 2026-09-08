import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext";
import axios from "axios";
import { server } from "../main";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { features } from "../utils";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { setUser, setIsAuth } = useAppData();

  const handleGoogleLogin = async (authResult: any) => {
    setLoading(true);

    try {
      const result = await axios.post(`${server}/api/user/google-login`, {
        code: authResult.code,
      });

      localStorage.setItem("token", result.data.token);
      toast.success(result.data.message);
      setUser(result.data.user);
      setIsAuth(true);
      navigate("/");
    } catch (error) {
      toast.error("Problem while Google login");
    } finally {
      setLoading(false);
    }
  };

  const handleEmailLogin = async () => {
    if (!email || !password) {
      toast.error("Email and password required");
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      toast.success(data.message);
      setUser(data.user);
      setIsAuth(true);
      navigate("/");
    } catch (error:any) {
      toast.error(error?.response?.data?.message || "Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: () => toast.error("Google login failed"),
    flow: "auth-code",
  });

  return (
    <div className="bg-page flex items-center justify-center p-4  pt-20">
        <div className="orb w-96 h-96 bg-indigo-500 -top-20 -left-20" />
      <div className="orb w-80 h-80 bg-emerald-500 bottom-10 right-0" />
      <div className="orb w-64 h-64 bg-violet-600 top-1/2 left-1/2 -translate-x-1/2" />
      <div className="glass-card w-full max-w-md p-10 flex flex-col items-center gap-6 z-10">
        <div className="flex justify-between w-9/11 items-center">
           <div className="w-12 h-12 rounded-xl bg-linear-to-br from-indigo-500 to-emerald-400 flex items-center justify-center shadow-lg shadow-indigo-500/30 text-3xl">
            📚
        </div>
        <h1 className="text-2xl font-bold text-gradient">CareerAI</h1>
        </div>
         <p className="text-white/40 text-sm leading-relaxed text-gradient">
            Your AI-powered career co-poilet - build, analyse, and land your
            next role.
          </p>
          
        <div className="flex flex-wrap justify-center gap-2">
          {features.map(({ icon: Icon, label }) => (
            <span key={label} className="feature-pill">
              <Icon size={11} className="text-indigo-400" />
              {label}
            </span>
          ))}
        </div>

        <div className="w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 text-white outline-none"
          />

          <button
            onClick={handleEmailLogin}
            disabled={loading}
            className="w-full py-3 rounded-lg bg-indigo-500 hover:bg-indigo-600"
          >
             Sign in with Email
          </button>

          <div className="text-center text-white/40 text-sm">OR</div>

          <button
            className="btn-google"
            onClick={googleLogin}
            disabled={loading}
          >
            {loading ? (
              <p className="animate-pulse">Please Wait...</p>
            ) : (
              <>
                <img src="/google.svg" alt="" className="w-4 h-4" />
                Sign in with Google
              </>
            )}
          </button>
          <p className="text-sm text-white/40 text-center">
               Don't have an account?{" "}
          <span
           onClick={() => navigate("/register")}
           className="text-indigo-400 cursor-pointer hover:underline"
         >
           Sign Up
         </span>
       </p>
        </div>

        <div className="text-[11px] text-white/25 text-center">
          By signing in you agree to Terms & Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default Login;