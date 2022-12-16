export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts!!</h1>
      {props.posts.map((post) => (
        // <div class="card">
        //   <div class="card-body">
        <div key={post.id} className="posts">
          <br />
          <h2>{post.title}</h2>
          <br />

          <h4>{post.body}</h4>
          <br />
          <img src={post.image} alt="" />

          <br />
          <button onClick={() => props.onSelectPost(post)} type="button" className="btn btn-info">
            MORE INFO
          </button>
        </div>
        //   </div>
        // </div>
      ))}
    </div>
  );
}
