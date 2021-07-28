import React, { useState } from "react";
import "./Login.css";
import { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import image3 from "../../images/image3.jpg";
import logo from "../../images/logo.png";
import {
  handleGoogleSignIn,
  intializeLoginFramework,
  handleSignOut,
  handleFbSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./LoginManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGoogle } from "@fortawesome/free-brands-svg-icons";

// import Header from "../Header/Header";
console.log(signInWithEmailAndPassword.error);
console.log(signInWithEmailAndPassword.err);
// console.log(signInWithEmailAndPassword.newUser.error);
function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    newUser: false,
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  intializeLoginFramework();

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const { log } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = log;

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handlResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handlResponse(res, true);
    });
  };
  const signOut = () => {
    handleSignOut().then((res) => {
      handlResponse(res, false);
    });
  };
  const handlResponse = (res, redirect) => {
    setUser(res);
    setLoggedIn(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUser = { ...user };
      newUser[e.target.name] = e.target.value;
      setUser(newUser);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          setUser(res);
          setLoggedIn(res);
          history.replace(from);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        setUser(res);
        setLoggedIn(res);
        history.replace(from);
      });
    }
    e.preventDefault();
  };
  return (
    <>
      <section className="container">
        <main className="row ">
          <div className="col-6 ">
            <div className=" LoginSectionForm " id="main">
              <img src={logo} alt="" className="LoginSectionTitleLogo" />
              {newUser ? (
                <h1 className="LoginSectionTitleLogo">Create an account</h1>
              ) : (
                <h1 className="LoginSectionTitleLogo">Login</h1>
              )}

              <form onSubmit={handleSubmit}>
                {newUser && (
                  <input
                    type="text"
                    onBlur={handleBlur}
                    placeholder="Your name"
                    required
                    name="name"
                    className="mb-2"
                  />
                )}
                <br />
                <input
                  type="text"
                  onBlur={handleBlur}
                  placeholder="Your email address"
                  required
                  name="email"
                  className="mb-3"
                />
                <br />
                <input
                  type="password"
                  id="txtPassword"
                  onBlur={handleBlur}
                  name="password"
                  placeholder="Your password"
                  required
                  className="mb-2"
                />
                <br />
                {newUser && (
                  <input
                    id="txtConfirmPassword"
                    type="password"
                    onBlur={handleBlur}
                    placeholder="Confirm password"
                    required
                    name="Confirmpassword "
                    className="mb-2"
                  />
                )}
                <br />
                <input
                  id="submit"
                  type="submit"
                  value={newUser ? "sign up" : "sign in"}
                  className="signupSignInBtn mb-3"
                />
                <p style={{ color: "red" }}>{user.error}</p>
                <br />
                {newUser ? (
                  <p></p>
                ) : (
                  <p className="createAccount">
                    Dont have an account?
                    <p
                      onClick={() => setNewUser(!newUser)}
                      className="text-danger createAccount"
                      style={{ cursor: "pointer" }}
                    >
                      Create an account
                    </p>
                  </p>
                )}
              </form>
              {user.success && (
                <p style={{ color: "green" }}>
                  User {newUser ? "created" : "login"} successfully
                </p>
              )}
              {user.isSignIn ? (
                <button onClick={signOut}>
                  <FontAwesomeIcon icon={faGoogle} />
                  sign out
                </button>
              ) : (
                <button onClick={googleSignIn} className="gBtn">
                  <FontAwesomeIcon icon={faGoogle} />
                  Sign in With Google
                </button>
              )}
              <br />
              <button onClick={fbSignIn} className="fbBtn">
                <FontAwesomeIcon icon={faFacebookSquare} />
                Sign in using Facebook{" "}
              </button>
            </div>
          </div>
          <div className="col-6">
            <div className="LoginSectionImage">
              <img src={image3} alt="" className="img-fluid"></img>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
