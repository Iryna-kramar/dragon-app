import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import "./Login_Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // to store value in localStorage
  const handleSubmit = (e) => {
    e.preventDafault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="app__wrapper-white">
      <div className="form__container">
        <h1 className="form__header"> Create an account</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="form__subtitle">Your name</label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>

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
            <p>Have already an account?</p>
            <Link className="form__subtitle-link" to={`/login`}>
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
