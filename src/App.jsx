import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
// import { Login } from "./Login";
// import { Signup } from "./Signup";
import { PostsIndex } from "./PostsIndex";
// import { PostNew } from "./PostNew";
import { LogoutLink } from "./LogoutLink";
import React from "react";
import ReactDOM from "react-dom";
import Snowfall from "react-snowfall";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/posts-index" element={<PostsIndex />} />
        {/* <Route path="/posts-new" element={<PostNew />} /> */}
        {/* <Route path="#" element={<LogoutLink />} /> */}
      </Routes>
      <Footer />
      <div style={{ height: 400, width: 400, background: "transparent", position: "relative" }}>
        <Snowfall
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
          }}
          snowflakeCount={200}
        />
      </div>
      ,
    </BrowserRouter>
  );
}

export default App;
