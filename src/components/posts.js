import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./post.css";

import { Get_Post, Get_Posts, Error } from "../redux/reducers/postReducer";

export const PostsComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        // dispatch(Get_Posts(posts));
      })
      .catch((err) => dispatch(Error));
  });

  //@useSelectorHook  allow for easy access to redux store
  const postState = useSelector((state) => state.posts);
  console.log(postState);

  return (
    <div className="Posts-component">
      <h4 className="Posts-header">Available Posts</h4>
    </div>
  );
};
