import RootLayout from "@/Layout/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <div className="container border border-red-500 mx-auto">
      <h1>Rajib</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
