import { cleanup, render, fireEvent } from "@testing-library/react";
import { PostItem } from "../components/posts/PostItem";

const dummyPosts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];

afterEach(cleanup);

describe("Test PostItem component", () => {
  it("should render", () => {
    const component = render(<PostItem posts={dummyPosts} />);

    expect(component).toMatchSnapshot();

    const title = `(${dummyPosts[0].id}). ${dummyPosts[0].title}`;
    expect(document.getElementById(`title${dummyPosts[0].id}`).innerHTML).toEqual(title);

    const posts = document.getElementsByClassName("post-item");
    expect(posts).toHaveLength(2);
  });

  it("should click post item", () => {
    const handlePostItemClick = jest.fn();

    render(
      <PostItem posts={dummyPosts} handlePostItemClick={handlePostItemClick} />
    );

    const button = document.getElementById("1");
    fireEvent.click(button);

    expect(handlePostItemClick).toBeCalled();
  });
});
