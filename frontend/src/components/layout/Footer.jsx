import React from "react";

export const Footer = () => {
  return (
    <div className="bg-[#3120E0] text-white h-[20vh] text-center flex items-center justify-center">
      Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
      et quasi architecto beatae vitae dicta sunt explicabo.<br />
      Ben Matela @ {new Date().getFullYear()}
    </div>
  );
};
