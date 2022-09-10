import React from "react";

export const PostItem = (props) => {
  const handleClick = (event) => {
    const index = event.currentTarget.id;
    props.handlePostItemClick(index);
  };

  return props.posts.map((post, i) => {
    return (
      <p
        id={post.id}
        onClick={(event) => handleClick(event)}
        key={i}
        className={
          "py-1 cursor-pointer hover:bg-[#e3e1d2] my-1 justify-evenly bg-[#F0EABE] text-[#000300] w-[100%] md:grid md:grid-cols-2 post-item rounded-md font-medium"
        }
      >
        <span id={"title" + post.id} className="m-2">
          ({post.id}). {post.title}
        </span>
        <span id={"body" + post.id} className="text-gray-600 m-2 hidden md:flex">
          {String(post.body).slice(0, 82) + "..."}
        </span>
      </p>
    );
  });
};
