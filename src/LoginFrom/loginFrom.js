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
      navigate("dashboard");
    } else {
      alert("invalid login");
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
        <br />
        <label>PassWord:</label>
        <input type={"password"} onChange={ChangeHandlerB} />
        <br />
        <br />
        <button onClick={SubmitHandler}>Submit</button>
        {state === false ? (
          <h3 style={{ color: "red" }}>
            Your username and password not matched
          </h3>
        ) : null}
      </center>
    </div>
  );
};
