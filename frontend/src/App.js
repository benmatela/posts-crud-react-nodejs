import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { AddPost } from "./components/posts/AddPost";
import { Header } from "./components/posts/Header";
import { Posts } from "./components/posts/Posts";
import { UpdatePost } from "./components/posts/UpdatePost";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route>
          <Route exact path="*" element={<Home />}></Route> */}
          <Route exact path="/" element={<Posts />}></Route>
          <Route exact path="*" element={<Posts />}></Route>
          <Route exact path="/posts/*" element={<Posts />}></Route>
          <Route exact path="/posts/add" element={<AddPost />}></Route>
          <Route exact path="/posts/update" element={<UpdatePost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
