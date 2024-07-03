import { Link, NavLink } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

export default function SignUp() {
  const [inputs, setInputs] = useState({
    emailMobile: "",
    fullName: "",
    usrName: "",
    pwd: "",
  });

  const { emailMobile, fullName, usrName, pwd } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = { emailMobile, fullName, usrName, pwd };
    try {
      const r = await fetch("http://localhost:3001/register/reg-auth", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const response = await r.json();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <div className="sign-up-container">
        <div className="sign-up-container-box">
          <div className="sign-up-title-box">
            <p className="sign-up-title">Sign Up</p>
            <p className="title-info">
              Sign up to see photos and videos from your friends.
            </p>
          </div>
          <form className="usr-info" onSubmit={onSubmit}>
            <div className="info-box">
              <input
                type="text"
                id="usr"
                className="info-field"
                placeholder="Mobile Number or Email"
                name="emailMobile"
                value={emailMobile}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="fn-box">
              <input
                type="text"
                id="fn"
                className="fn-field"
                placeholder="Full Name"
                name="fullName"
                value={fullName}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="un-box">
              <input
                type="text"
                id="usrname"
                className="un-field"
                placeholder="Username"
                name="usrName"
                value={usrName}
                onChange={(e) => onChange(e)}
                required
              />
            </div>
            <div className="s-password-box">
              <input
                type="password"
                id="pwd"
                className="s-pwd-field"
                placeholder="password"
                name="pwd"
                value={pwd}
                onChange={(e) => onChange(e)}
                required
              />
            </div>

            <div className="learn-box">
              <p className="information">
                People who use our service may have uploaded your contact
                information.{" "}
                <NavLink to="/" className="learn-more">
                  Learn more
                </NavLink>
              </p>
            </div>
            <button id="btn-id" className="s-btn" type="submit">
              Sign Up
            </button>
          </form>
          <div className="s-sign-up-box">
            <p className="text">Have an account?</p>
            <Link to="/login" className="sign-up">
              Log in now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
