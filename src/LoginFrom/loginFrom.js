import { useState } from "react";
import { useNavigate } from "react-router-dom";
const _USERNAME = "123";
const _PASSWORD = "123";

export const LoginFrom = () => {
  const [userNameError, setUserNameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const ChangeHandlerA = (e) => {
    setUserName(e.target.value);
  };
  const ChangeHandlerB = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const SubmitHandler = () => {
    if (_USERNAME === userName && _PASSWORD === password) {
      window.localStorage.setItem("isLoggedIn", true);
      navigate("home");
    }
    setError(true);
    setUserNameError(userName.length === 0);
    setPasswordError(password.length === 0);
  };
  return (
    <div>
      <center>
        <br />
        <br />
        <label>Username:</label>
        <input type={"text"} name="username" onChange={ChangeHandlerA} />
        <br />
        {userNameError && (
          <h6 style={{ color: "red", margin: "0" }}>* Username is required</h6>
        )}
        <br />
        <label>PassWord:</label>
        <input type={"password"} onChange={ChangeHandlerB} />
        <br />
        {passwordError && (
          <h5 style={{ color: "red", margin: "0" }}>* password is required</h5>
        )}
        <br />
        <button onClick={SubmitHandler}>Submit</button>
        {error && (
          <h5 style={{ color: "red", margin: "0" }}>
            userName and password not matched
          </h5>
        )}
      </center>
    </div>
  );
};
