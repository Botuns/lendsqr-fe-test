import type { FC, FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import lendsqrLogo from "../assets/lendsqrlogo.svg";
import signInIllustration from "../assets/pablo-signin.png";
import { useToast } from "../components/toast/ToastContext";
import "../styles/pages/login.scss";

const LoginPage: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const { pushToast } = useToast();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = String(formData.get("email") ?? "").trim();
    const password = String(formData.get("password") ?? "").trim();

    if (!email || !password) {
      pushToast("Please enter email and password.", "error");
      return;
    }

    if (email === "admin@lendqr.com" && password === "admin@lendqr.com") {
      pushToast("Login successful.", "success");
      navigate("/dashboard");
      return;
    }

    pushToast("Invalid credentials.", "error");
  };

  return (
    <div className="login-page">
      <section className="login-page__left">
        <div className="login-page__logo">
          <img src={lendsqrLogo} alt="Lendsqr" />
        </div>
        <div className="login-page__illustration">
          <img src={signInIllustration} alt="Sign in" />
        </div>
      </section>
      <section className="login-page__right">
        <form className="login-form" onSubmit={handleSubmit}>
          <header className="login-form__heading">
            <h1 className="login-form__title">Welcome!</h1>
            <p className="login-form__subtitle">Enter details to login.</p>
          </header>

          <div className="login-form__field">
            <label className="login-form__label" htmlFor="email">
              Email
            </label>
            <div className="login-form__input-wrapper">
              <input
                id="email"
                name="email"
                type="email"
                className="login-form__input"
                placeholder="Email"
                required
              />
            </div>
          </div>

          <div className="login-form__field">
            <label className="login-form__label" htmlFor="password">
              Password
            </label>
            <div className="login-form__input-wrapper">
              <input
                id="password"
                name="password"
                type={passwordVisible ? "text" : "password"}
                className="login-form__input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="login-form__toggle-password"
                onClick={() => setPasswordVisible((visible) => !visible)}
              >
                {passwordVisible ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>

          <button type="button" className="login-form__forgot-password">
            FORGOT PASSWORD?
          </button>

          <button type="submit" className="login-form__button">
            LOG IN
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginPage;
