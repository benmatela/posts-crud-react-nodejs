import React from "react";

export const PostItem = (props) => {
  const handleClick = (event) => {
    const index = event.currentTarget.id;
    props.handlePostItemClick(index);
  };

  return props.posts.map((post, i) => {
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
          <div className="font-bold text-l">
            <span id={"title" + post.id} data-testid={"title" + post.id} className="m-2">
              ({post.id}). {post.title}
            </span>
          </div>
          <p id={"body" + post.id} data-testid={"body" + post.id} className="m-2 hidden md:flex">
              {String(post.body).slice(0, 82) + "..."}
          </p>
        </div>
      </div>
    );
  });
};
