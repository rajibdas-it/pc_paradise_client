import Card from "@/Components/Card";
import Header from "@/Components/Header";
import Loading from "@/Components/ui/Loading";
import RootLayout from "@/Layout/RootLayout";
import React from "react";

const HomePage = ({ allProducts }) => {
  const products = allProducts.slice(0, 10);

  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  // console.log("from homepage", data);

  return {
    props: {
      allProducts: data?.data,
    },
  };
};
