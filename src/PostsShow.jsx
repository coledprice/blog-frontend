import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onPostUpdate(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onPostDestroy(props.post);
  };

  return (
    <div id="posts-show">
      <h2 class="text-white">{props.post.title}</h2>
      <p class="text-white">{props.post.body}</p>
      <h2 class="text-white">Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div class="text-white">
          title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div class="text-white">
          body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <br />
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
      <br />
      <button onClick={handleClick} type="button" className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
