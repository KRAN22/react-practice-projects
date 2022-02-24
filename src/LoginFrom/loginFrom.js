import { useState } from "react";
import { useNavigate } from "react-router-dom";
const userName = "123";
const PassWord = "123";

export const LoginFrom = () => {
  const [state, setState] = useState(null);
  const [userA, setUserA] = useState("");
  const [passwordB, setPasswordB] = useState("");

  const ChangeHandlerA = (e) => {
    setUserA(e.target.value);
  };
  const ChangeHandlerB = (e) => {
    setPasswordB(e.target.value);
  };
  const navigate = useNavigate();
  const SubmitHandler = () => {
    if (userName === userA && PassWord === passwordB) {
      window.localStorage.setItem("isLoggedIn", true);
      navigate("home");
    } else {
      setState(true);
    }
    if (userA.length === 0 && passwordB.length === 0) {
      setState(false);
    }
  };
  return (
    <div>
      <center>
        <br />
        <br />
        <label>Username:</label>
        <input type={"text"} name="username" onChange={ChangeHandlerA} />
        <br />
        {state === false ? (
          <h5 style={{ color: "red", margin: "0" }}>* userName is required</h5>
        ) : null}
        <br />
        <label>PassWord:</label>
        <input type={"password"} onChange={ChangeHandlerB} />
        <br />
        {state === false ? (
          <h5 style={{ color: "red", margin: "0" }}>* password is required</h5>
        ) : null}
        <br />
        <button onClick={SubmitHandler}>Submit</button>
        {state === true ? (
          <h5 style={{ color: "red", margin: "0" }}>
            userName and password not matched
          </h5>
        ) : null}
      </center>
    </div>
  );
};
