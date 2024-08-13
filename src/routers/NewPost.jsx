import classes from "./NewPost.module.css";
import { useState } from "react";
import Modal from "../components/Modal";
import {Link} from "react-router-dom"
function NewPost({ onCancel,onAddPost }) {
  const [enteredBody, setEnterBody] = useState("");
  const [enteredAuthor, setAuthor] = useState("");

  function onBodyChangedHandler(event) {
    setEnterBody(event.target.value);
  }

  function onAuthorChangeHandler(event) {
    setAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <Modal>
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChangedHandler} />
      </p>

      <p>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          required
          onChange={onAuthorChangeHandler}
        />
      </p>
      <p className={classes.actions}>
        <Link to='..' type="button">
          Cancel
        </Link>
        <button onClick={submitHandler}>Submit</button>
      </p>
    </form>
    </Modal>
  );
}

export default NewPost;
