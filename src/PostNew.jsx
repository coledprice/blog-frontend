import axios from "axios";

export function PostNew() {
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response, "Creating Post");
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);

    console.log("handleSubmit new post", params);
    handleCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          title: <input name="title" type="text" />
        </div>
        <div>
          body: <input name="body" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <button type="submit" className="btn btn-light">
          Create Post
        </button>
      </form>
    </div>
  );
}
