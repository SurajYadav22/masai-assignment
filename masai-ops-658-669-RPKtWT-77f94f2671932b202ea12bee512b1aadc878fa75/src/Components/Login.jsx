import React, { useEffect, useState } from "react";
// import "./login.css";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const initialvalues = { name: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const handleChange = (inp) => {
    const { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handlelogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((res) => {
        let result = res.filter((el) => {
          return (
            el.name === inputValues.name && el.password === inputValues.password
          );
        });

        if (result.length > 0) {
          alert("login Succesfull");
          navigate("/");
        } else {
          setError("User Doesn't exist");
          alert("User Doesn't exist");
          setError("");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form">
      <h1>Login</h1>
      <form className="auth_form">
        <input
          type="name"
          className="name"
          placeholder="Enter Name"
          name="name"
          onChange={handleChange}
          value={inputValues.name}
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="Enter password"
          onChange={handleChange}
          name="password"
          value={inputValues.password}
        />
        <br />
        <button id="submit" onClick={handlelogin}>
          Submit
        </button>
      </form>
      <h3 className="error-container">{error}</h3>
    </div>
  );
}
