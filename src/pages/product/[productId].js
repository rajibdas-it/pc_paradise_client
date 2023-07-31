import KeyFeatures from "@/Components/KeyFeatures";
import RootLayout from "@/Layout/RootLayout";

import React from "react";

const ProductDetails = ({ product }) => {
  console.log(product);
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 ">
      <div className="flex flex-col max-w-4xl mx-auto overflow-hidden rounded">
        <img
          src={product?.image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-500"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-4xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-900">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {product?.product_name}
            </a>
            <div className="flex justify-start divide-x-2 divide-slate-200 space-x-5">
              <p className="text-xs md:text-sm lg:text-xl text-gray-400">
                Category: {product?.category}
              </p>
              <p className="pl-3 text-xs md:text-sm lg:text-xl text-gray-400">
                Tk. {product.price}
              </p>
              <p className="text-xs md:text-sm lg:text-xl pl-3 text-gray-400">
                Ratings: {product.rating}/5
              </p>
              <p className="text-xs md:text-sm lg:text-xl pl-3 text-gray-400">
                Status: {product.status}
              </p>
            </div>
          </div>
          <div className="text-gray-100 text-2xl">
            <ul className="list-disc list-inside">
              {product?.keyFeatures.map((feature, index) => (
                <KeyFeatures key={index + 1} feature={feature} />
              ))}
            </ul>
          </div>
          <div className="text-gray-100 text-justify">
            <p>{product?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async ({ params }) => {
  // const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data?.data,
    },
  };
};
