import Card from "@/Components/Card";
import Header from "@/Components/Header";
import Loading from "@/Components/ui/Loading";
import RootLayout from "@/Layout/RootLayout";
import React from "react";

const HomePage = ({ products }) => {
  // console.log(products);
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-10 border border-red-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {products.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
