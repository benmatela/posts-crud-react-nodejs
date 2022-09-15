import React, { useEffect } from "react";
import { useState } from "react";

export const PostItem = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);
 
  const handleClick = (event) => {
    const index = event.currentTarget.id;
    props.handlePostItemClick(index);
  };

  return posts.map((post, i) => {
    return (
      <div
        id={post.id}
        data-testid={post.id}
        onClick={(event) => handleClick(event)}
        key={i}
        className={
          "py-1 cursor-pointer hover:bg-[#e3e1d2] bg-[#F0EABE] text-gray-600 w-[100%] mb-1 post-item rounded-md shadow-lg font-medium"
        }
      >
        <div className="px-6 py-4 m-2">
          <div
            className={
              posts.length <= 8 ? "font-bold text-xl" : "font-bold text-l"
            }
          >
            <span
              id={"title" + post.id}
              data-testid={"title" + post.id}
              className={"m-2"}
            >
              ({post.id}). {post.title}
            </span>
          </div>
          <p
            id={"body" + post.id}
            data-testid={"body" + post.id}
            className={
              posts.length <= 8
                ? "m-2 hidden md:flex text-xl"
                : "m-2 hidden md:flex"
            }
          >
            {posts.length <= 8
              ? post.body
              : String(post.body).slice(0, 82) + "..."}
          </p>
        </div>
      </div>
    );
  });
};
