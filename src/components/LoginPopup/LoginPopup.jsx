import React from "react";
import "./LoginPopup.css";

const LoginPopup = () => {
  const [currStare, setCurrState] = useState("Sign Up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />

          <input type="password" placeholder="password" required />
        </div>

        <button>{currState === "Sign Up" ? "Ceate account" : "Login"}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p> By continuing, iagree to the terms of use & privacy policy.</p>
        </div>
{currStare==="Login"

  ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>

  :<p>Already have an account? <span onClick={()=>setCurrState("login")}>Login here</span></p>


}
        <p>
          Create a new account? <span>Click here</span>
        </p>

        <p>Already have an account? <span>Login here</span></p>
      </form>
    </div>
  );
};

export default LoginPopup;
