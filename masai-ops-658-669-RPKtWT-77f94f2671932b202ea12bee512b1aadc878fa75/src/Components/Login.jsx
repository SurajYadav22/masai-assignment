import { React, useState } from "react";
// import { useState } from "react";

export default function Login() {
  const initialvalues = { name: "", password: "" };
  const [inputValues, setInputValues] = useState(initialvalues);
  const [error, setError] = useState("");

  const handleChange = (inp) => {
    const { name, value } = inp.target;
    setInputValues({ ...inputValues, [name]: value });
    console.log(inputValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then((res) => {
        let test2 = res.filter((el) => {
          return (
            el.name === inputValues.name && el.password === inputValues.password
          );
        });
        console.log(test2);
        if (test2.length > 1) {
          alert("login Succesfull");
        } else {
          setError("User Doesn't exist");
          alert("User Doesn't exist");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form className="auth_form">
        <input
          type="name"
          className="name"
          placeholder="Enter Name"
          value={initialvalues.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          className="password"
          placeholder="Enter password"
          value={initialvalues.password}
          onChange={handleChange}
        />
        <br />
        <input className="submit" type="submit" onClick={handleSubmit} />
      </form>
      <h3 className="error-container">{error}</h3>
    </div>
  );
}
