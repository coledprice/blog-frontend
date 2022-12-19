import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { PostsIndex } from "./PostsIndex";
import { PostNew } from "./PostNew";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/posts-index" element={<PostsIndex />} />
        <Route path="/posts-new" element={<PostNew />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
