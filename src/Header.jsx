import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Blogr</a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <header>
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
        |{" "}
        <button type="button" className="btn btn-light">
          <Link to="/login" className="link-success">
            Login
          </Link>
        </button>{" "}
        |
        <button type="button" className="btn btn-light">
          <Link to="/signup" className="link-success">
            Signup
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
          <Link to="/posts-new" className="link-success">
            New Post
          </Link>
        </button>{" "}
      </header>
    </div>
  );
}
