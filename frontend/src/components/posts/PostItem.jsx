import React from "react";

export const PostItem = (props) => {
  const handleClick = (event) => {
    const index = event.currentTarget.id;
    props.handlePostItemClick(index);
  };

  return props.posts.map((post, i) => {
    return (
      <div
        key={i}
        className="flex py-1 cursor-pointer hover:bg-[#ece9cf] my-1 bg-[#F0EABE] text-[#000300] w-[100%] rounded-md font-medium"
      >
        <span
          id={post.id}
          onClick={(event) => handleClick(event)}
          className="mx-auto post-item"
        >
          ({post.id}). {post.title}
        </span>
      </div>
    );
  });
};
