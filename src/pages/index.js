import Header from "@/Components/Header";
import Loading from "@/Components/ui/Loading";
import RootLayout from "@/Layout/RootLayout";
import React from "react";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
