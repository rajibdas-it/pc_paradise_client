import Link from "next/link";
import bdTkSign from "../../public/tk_sign.png";
import KeyFeatures from "./KeyFeatures";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/addToCart/cartSlice";

const Card = ({ product }) => {
  const dispatch = useDispatch();

  const {
    _id,
    category,
    description,
    image,
    keyFeatures,
    price,
    product_name,
    rating,
    status,
  } = product || {};
  const handleAddProduct = () => {
    dispatch(addToCart(product));
    console.log("product added");
  };
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={product_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product_name}</h2>
        <p className="text-justify truncate">{description}</p>
        <div>
          <p className="text-base underline underline-offset-4 text-blue-500/70 font-bold">
            Key Features
          </p>
          <ul className="list-disc list-inside">
            {keyFeatures.map((feature, index) => (
              <KeyFeatures key={index + 1} feature={feature} />
            ))}
          </ul>
        </div>
        <div className="card-actions justify-end ">
          <div className="badge badge-outline hover:bg-slate-500 transition delay-75 p-2">
            {category}
          </div>
          <div className="badge badge-outline hover:bg-slate-500 transition delay-75 p-2">
            {/* <img className="w-6 h-6" src={bdTkSign} alt="" />  */}
            {price}
          </div>
          <div className="badge badge-outline hover:bg-slate-500 transition delay-75 p-2">
            {rating}
          </div>
          <div className="badge badge-outline hover:bg-slate-500 transition delay-75 p-2">
            {status}
          </div>
        </div>
        <div className="card-actions justify-end mt-2">
          <Link href={`/product/${_id}`}>
            <button className="btn btn-primary text-white">Details</button>
          </Link>
          <button
            onClick={handleAddProduct}
            className="btn btn-primary text-white hover:bg-slate-500"
          >
            Add To Builder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
