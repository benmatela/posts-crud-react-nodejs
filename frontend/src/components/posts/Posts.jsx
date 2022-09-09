import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../services/post";
import { PostItem } from "./PostItem";
import { Search } from "../shared/Search";

export const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [postsStorage, setPostsStorage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchPlaceholder = "Search Posts";

  useEffect(() => {
    getPosts()
      .catch((error) => {
        // show error message on screen
        setIsLoading(false);
      })
      .then((res) => {
        setPosts(res.data);
        setPostsStorage(res.data);
        setIsLoading(false);
      });
  }, []);

  /**
   * Handle search input and get the searchItem
   * @param {*} searchItem
   */
  const handleSearchClick = (searchItem) => {
    if (String(searchItem).trim().length > 0) {
      setPosts(() => {
        return postsStorage;
      });
      setPosts((current) =>
        current.filter((post) => {
          return String(post.title)
            .trim()
            .toLowerCase()
            .includes(String(searchItem).toLowerCase());
        })
      );
    } else {
      setPosts(() => {
        return postsStorage;
      });
    }
  };

  /**
   * Handle selected post item click
   * @param {*} index
   */
  const handlePostItemClick = (index) => {
    const selected = posts.find((p) => Number(p.id) === Number(index));
    if (selected) {
      navigate("/posts/update", { state: { selected } });
    }
  };

  return (
    <div className="w-full bg-white h-[600px] mb-3">
      <h1 className="text-center text-3xl font-bold" id="pageHeader">
        {`Posts (${posts.length})`}
      </h1>
      {isLoading ? (
        <h1
          id="loader"
          className="text-center text-[#28a745] md:text-4xl text-2xl mt-4 font-bold"
        >
          Loading posts..
        </h1>
      ) : (
        <div className="m-3">
          <Search
            handleSearchClick={handleSearchClick}
            searchPlaceholder={searchPlaceholder}
          />
          <div className="m-3"></div>
          <div className="overflow-y-scroll h-[500px]" id="postItems">
            <PostItem handlePostItemClick={handlePostItemClick} posts={posts} />
          </div>
        </div>
      )}
    </div>
  );
};
