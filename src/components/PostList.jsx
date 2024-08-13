import Post from "./Post";
import classes from "./PostList.module.css";
import { useState } from "react";
import { useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
      setIsSubmitSuccess(false);
    }

    fetchPosts();
  }, [isSubmitSuccess]);
  // async function addPostDataHandler(postData) {
  //   const response = await fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   if (response.ok) {
  //     setIsSubmitSuccess(true);
  //   }
  // }
  return (
    <>
     
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white " }}>
          <h1>There are no posts yet.</h1>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white " }}>
          <h1>Loading posts...</h1>
        </div>
      )}
    </>
  );
}

export default PostList;
