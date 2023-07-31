import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1 className="text-4xl text-black">
        Product Details Products: {router?.query?.productId}
      </h1>
    </div>
  );
};

export default ProductDetails;
