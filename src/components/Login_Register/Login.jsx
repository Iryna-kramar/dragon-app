import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Login_Register.css";

const Login = () => {
  const navigate = useNavigate;

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDafault();
    const loggeduser = JSON.stringify(localStorage.setItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("Loggedin", true);
      navigate("/");
    } else {
      alert("wrong Email or Password");
    }
  };

  return (
    <div className="app__wrapper-white">
    <div className="form__container">
      <h1 className="form__header">Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label className="form__subtitle">Your email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <label className="form__subtitle">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={(e) =>
              setInput({ ...input, [e.target.name]: e.target.value })
            }
          />
        </div>

        <div>
          <button className="app__button-black " type="submit">
            Register
          </button>
        </div>
        <div className="form__subtitle-p">
          <p>Don't have an account?</p>
          <Link className="form__subtitle-link" to={`/register`}>
            Register here
          </Link>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
