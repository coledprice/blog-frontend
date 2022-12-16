export function Footer() {
  return (
    <div>
      <br />
      <h4>© Copywrite 2022</h4>
      <br />
      <br />
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
    </div>
  );
}
