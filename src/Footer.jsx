import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink";
import { Login } from "./Login";
import { PostNew } from "./PostNew";

export function Footer() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isPostNewVisible, setIsPostNewVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };
  const handlePostNewShow = () => {
    setIsPostNewVisible(true);
  };

  const handlePostNewClose = () => {
    setIsPostNewVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };
  return (
    <div>
      <br />
      <h4 className="text-center">© Copywrite 2022</h4>
      <br />
      <br />
      <footer className="text-center">
        {" "}
        <button type="button" className="btn btn-light">
          <Link to="/" className="link-success">
            Home
          </Link>
        </button>{" "}
        |{" "}
        <button type="button" className="btn btn-light">
          <Link to="/about" className="link-success">
            About
          </Link>
        </button>{" "}
        |
        <button type="button" className="btn btn-light">
          <Link to="/posts-index" className="link-success">
            All Posts
          </Link>
        </button>{" "}
        |
        <button type="button" className="btn btn-light">
          <Link onClick={handlePostNewShow} to="#" className="link-success">
            New Post
          </Link>
        </button>{" "}
        |{" "}
        {localStorage.jwt === undefined ? (
          <>
            <button type="button" className="btn btn-light">
              <Link onClick={handleLoginShow} to="#" className="link-success">
                Login
              </Link>
            </button>{" "}
            |
            <button type="button" className="btn btn-light">
              <Link onClick={handleSignupShow} to="#" className="link-success">
                Signup
              </Link>
            </button>{" "}
          </>
        ) : (
          <button type="button" className="btn btn-success">
            <Link onClick={handleLogout} to="#" className="link-light">
              Log Out
            </Link>
          </button>
        )}
        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>
        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login />
        </Modal>
        <Modal show={isPostNewVisible} onClose={handlePostNewClose}>
          <PostNew />
        </Modal>
      </footer>
    </div>
  );
}
