import React from "react";
import styles from "./style.module.css";
const Login = () => {
    const submitFun=(e)=>{
        e.preventDefault();
    }
  return (
    <div className={`center ${styles.login}`}>
      <div className={`center ${styles.loginForm}`}>
        <h2>welcame to activity system</h2>
        <form className="center" onSubmit={submitFun}>
          <label htmlFor="name">user name:</label>
          <input type="text" name="name" placeholder="enter your name" />
          <label htmlFor="passworde">passworde:</label>
          <input type="password" placeholder="enter your password" />
          <button type="submit">submit</button>
        </form>
        <a href="#">first time here?</a>
      </div>
    </div>
  );
};

export default Login;
