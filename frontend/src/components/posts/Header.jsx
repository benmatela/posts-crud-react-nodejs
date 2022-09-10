import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <div className="w-full text-black">
        <div id="links" data-testid={"links"} className="max-w-[1240px] mt-3 mx-auto grid grid-cols-2 text-center">
          <Link to="/posts" data-testid={"link"} className="hover:underline link">
            LIST POSTS
          </Link>
          <Link to="/posts/add" data-testid={"link"} className="hover:underline link">
            ADD POST
          </Link>
        </div>
      </div>
  );
};
