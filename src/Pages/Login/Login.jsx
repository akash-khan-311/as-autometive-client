import React, { useContext } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import NavMenu from "../../components/NavMenu/NavMenu";
import { AuthContext } from "../../Context/AuthProvider";
import { Helmet } from "react-helmet";
const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email.length === 0) {
      toast.error("Enter Your Email");
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      toast.error("Enter a Valid Email Address");
      return;
    } else if (password.length === 0) {
      toast.error("Enter Your Password");
      return;
    }
    login(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("user login successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  const handleGoogleLogIn = () => {
    googleLogin()
      .then(() => {
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <NavMenu />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center">
        <div className="form-container  backdrop-blur-lg bg-white/20">
          <div className="heading ">Login</div>
          <form onSubmit={handleLogin} className="form">
            <input
              className="input backdrop-blur-sm bg-white/30"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
            />
            <input
              className="input backdrop-blur-sm bg-white/30"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
            <span className="forgot-password">
              <a href="#">Forgot Password ?</a>
            </span>
            <input
              className="login-button "
              type="submit"
              defaultValue="Sign In"
            />
          </form>
          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">
              <button onClick={handleGoogleLogIn} class="button google">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 256 262"
                >
                  <path
                    fill="#4285F4"
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                  ></path>
                  <path
                    fill="#34A853"
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                  ></path>
                  <path
                    fill="#FBBC05"
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                  ></path>
                  <path
                    fill="#EB4335"
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                  ></path>
                </svg>
                Continue with Google
              </button>
            </div>
            <div className="my-5 text-white">
              <p>
                Don't have an Account ?{" "}
                <Link className="underline" to={"/register"}>
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
