import Link from "next/link";
import React from "react";

const PCBuildOptions = ({ categories }) => {
  //   console.log(categories);
  return (
    <div className="text-black mt-20">
      <h1 className="text-2xl sm:text-4xl text-center p-5 bg-slate-400/40 text-white">
        Build Your PC
      </h1>
      <div className="p-5">
        <ul className="divide-y divide-gray-600">
          {categories.map((category) => (
            <li
              key={category._id}
              className="flex items-center justify-between p-3"
            >
              <p>{category?.categoryName}</p>
              <Link href={`/product?category=${category?.categoryName}`}>
                {" "}
                <button className="btn btn-sm md:btn-md btn-outline btn-info">
                  Choose
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PCBuildOptions;
