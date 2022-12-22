export function PostsIndex(props) {
  console.log(props);
  return (
    //     <div id="posts-index">
    //       <h1 className="text-center">All Posts!!</h1>
    //       {props.posts.map((post) => (
    //         <div key={post.id} className="posts">
    //           <br />
    //           <h2>{post.title}</h2>
    //           <br />

    //           <h4>{post.body}</h4>
    //           <br />
    //           <img src={post.image} alt="" />

    //           <br />
    //           <button onClick={() => props.onSelectPost(post)} type="button" className="btn btn-dark">
    //             MORE INFO
    //           </button>
    //         </div>
    //       ))}
    //     </div>
    //   );
    // }

    <div id="posts-index">
      <h1 className="text-center">All posts!!</h1>
      <br />
      <br />
      <div className="posts row text-bg-success mb-3">
        {props.posts.map((post) => (
          <div className="col-4" key={post.id}>
            <br />
            <h2 className="card-title text-center">{post.title}</h2>
            <br />
            <div>
              <img src={post.image} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <br />
            <h4 className="card-text text-center">{post.body}</h4>
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-dark" onClick={() => props.onSelectPost(post)}>
                MORE INFO
              </button>
              <br />
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
