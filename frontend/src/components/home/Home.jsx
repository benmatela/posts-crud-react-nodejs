import React from "react";
import { Footer } from "../layout/Footer";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <h1 className="text-center text-gray-600 text-2xl md:text-4xl font-bold md:m-8 m-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h1>
      <div className="banner"></div>
      <Footer />
    </div>
  );
};
