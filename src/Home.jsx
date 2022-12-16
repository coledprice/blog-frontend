import { useState, useEffect } from "react";
import axios from "axios";
import { PostNew } from "./PostNew";
import { PostsIndex } from "./PostsIndex";
import { Footer } from "./Footer";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [posts, setPosts] = useState([]);

  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log("gonna get all posts!");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleHidePost();
    });
  };

  const handlePostDestroy = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <br />
      <br />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <Login />
            <br />
            <LogoutLink />
          </div>

          <div className="col">
            <Signup />
          </div>
          <div className="col">
            <PostNew onPostCreate={handleCreatePost} />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onPostUpdate={handleUpdatePost} onPostDestroy={handlePostDestroy} />
      </Modal>

      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
