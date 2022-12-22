import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(undefined);
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1 class="text-white">Signup</h1>
      {status ? <img src={`https://httpstatusdogs.com/img/${status}.jpg`} alt="" /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div class="text-white">
          Name: <input value={name} onChange={(event) => setName(event.target.value)} name="name" type="text" />
        </div>
        <small className="text-danger">{20 - name.length} characters remaining</small>
        <div class="text-white">
          Email: <input name="email" type="email" />
        </div>
        <div class="text-white">
          Password:
          <br />
          <input
            className="form-control"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </div>
        <div class="text-white">
          Password confirmation:
          <br />
          <input
            className="form-control"
            value={password_confirmation}
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            name="password_confirmation"
            type="password"
          />
        </div>
        {password_confirmation !== password ? <small className="text-danger ">Password doesn't match!</small> : null}
        <br />
        <button type="submit" className="btn btn-light">
          Signup
        </button>
      </form>
    </div>
  );
}
