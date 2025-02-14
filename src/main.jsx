import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewPost from "./routers/NewPost.jsx";
import RootLayout from "./routers/RootLayer.jsx";
import Posts from "./routers/Posts.jsx";
import { postDetailLoader, postsLoader } from "./shared/Utils.jsx";
import { newPostAction } from "./shared/Utils.jsx";
import PostDetails from "./routers/PostDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:id", loader: postDetailLoader, element: <PostDetails /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
