import { redirect } from "react-router-dom";

export async function postsLoader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}

export async function newPostAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}

export async function postDetailLoader({ params }) {
  const response = await fetch("http://localhost:8080/posts/" + params.id);
  const resData = await response.json();
  return resData.post;
}
