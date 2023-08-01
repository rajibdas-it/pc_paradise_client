import Card from "@/Components/Card";
import RootLayout from "@/Layout/RootLayout";
import { useRouter } from "next/router";
import React from "react";

const ProductHomePage = ({ allProducts }) => {
  const router = useRouter();
  const categoryQuery = router?.query?.category;

  let products;
  //   console.log(router);
  //   console.log(categoryQuery);
  //   console.log(products);
  if (categoryQuery) {
    products = allProducts.filter(
      (product) => product.category === categoryQuery
    );
  } else {
    products = allProducts;
  }

  return (
    <div className="container mx-auto">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
        {products.map((product) => (
          <Card key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductHomePage;

ProductHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pcparadise.vercel.app/api/products");
  const data = await res.json();
  return {
    props: {
      allProducts: data.data,
    },
  };
};
