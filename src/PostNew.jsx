export function PostNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);

    console.log("handleSubmit", params);
    props.onPostCreate(params);
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