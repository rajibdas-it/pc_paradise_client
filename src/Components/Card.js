import bdTkSign from "../../public/tk_sign.png";
import KeyFeatures from "./KeyFeatures";

const Card = ({ product }) => {
  console.log(product);

  const {
    category,
    description,
    image,
    keyFeatures,
    price,
    product_name,
    rating,
    status,
  } = product || {};
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
          {keyFeatures.map((feature) => (
            <KeyFeatures feature={feature} />
          ))}
        </div>
        <div className="card-actions justify-end hover:bg-slate-500">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            <img className="w-6 h-6" src={bdTkSign} alt="" /> {price}
          </div>
          <div className="badge badge-outline">{rating}</div>
          <div className="badge badge-outline">{status}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
