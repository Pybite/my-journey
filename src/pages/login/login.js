import { Link } from "react-router-dom";
import "./login.css";
import { useState } from "react";
export default function LoginScreen() {
  const [inputs, setInputs] = useState({
    user: "",
    pwd: ""
  });

  const { user, pwd } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = { user, pwd };
    try {
      const r = await fetch("http://localhost:3001/login/log-auth", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response = await r.json();
      localStorage.setItem('token', response.token);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div className="container">
      <form id="login-form" onSubmit={onSubmit}>
        <div className="login-container">
          <div className="login-title">
            <p className="login">Login</p>
          </div>

          <div className="name-box">
            <i id="icon-1" className="bx bx-user bx-flashing"></i>
            <input
              type="text"
              id="usr"
              className="name-field"
              placeholder="Name or Phone"
              name="user"
              value={user}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="password-box">
            <i id="icon-2" className="bx bx-lock bx-flashing"></i>
            <input
              type="password"
              id="pwd"
              className="pwd-field"
              placeholder="Enter password"
              name="pwd"
              value={pwd}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="reset">
            <a href="/forget" className="for-reset">
              Forgot password?
            </a>
          </div>

          <button id="btn-func" className="btn" type="submit">
            Login
          </button>
          <div className="sign-up-box">
            <p className="text">
              Not a member?
              <Link to="/signup" className="sign-up">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
