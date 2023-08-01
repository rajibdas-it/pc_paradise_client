import PCBuildOptions from "@/Components/PCBuildOptions";
import ShoppingCart from "@/Components/ShoppingCart";
import RootLayout from "@/Layout/RootLayout";
import { useSelector } from "react-redux";

const PCBuilderHomePage = ({ categories }) => {
  const { products } = useSelector((state) => state.cart);

  return (
    <div className=" container mx-auto">
      {products.length > 0 && <ShoppingCart products={products} />}
      <PCBuildOptions categories={categories} />
    </div>
  );
};

export default PCBuilderHomePage;

PCBuilderHomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("https://pcparadise.vercel.app/api/categories");
  const data = await res.json();
  return {
    props: {
      categories: data.data,
    },
  };
};
