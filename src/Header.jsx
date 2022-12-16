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
          <a href="#" className="link-success">
            Home
          </a>
        </button>{" "}
        |
        <button type="button" className="btn btn-light">
          <a href="#posts-index" className="link-success">
            All Posts
          </a>
        </button>{" "}
        |
        <button type="button" className="btn btn-light">
          <a href="#posts-new" className="link-success">
            New Post
          </a>
        </button>{" "}
      </header>
    </div>
  );
}
