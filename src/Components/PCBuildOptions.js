import Link from "next/link";
import React from "react";

const PCBuildOptions = () => {
  return (
    <div className="text-black">
      <h1 className="text-2xl sm:text-4xl text-center p-5 bg-slate-400/40 text-white">
        Build Your PC
      </h1>
      <div className="p-5">
        <ul className="divide-y divide-gray-600">
          <li className="flex items-center justify-between p-3">
            <p>CPU</p>
            <Link href={"/product?category=processor"}>
              {" "}
              <button className="btn btn-sm md:btn-md btn-outline btn-info">
                Choose
              </button>
            </Link>
          </li>
          <li className="flex items-center justify-between p-3">
            <p>CPU</p>
            <button className="btn btn-sm md:btn-md btn-outline btn-info">
              Choose
            </button>
          </li>
          <li className="flex items-center justify-between p-3">
            <p>CPU</p>
            <button className="btn btn-sm md:btn-md btn-outline btn-info">
              Choose
            </button>
          </li>
          <li className="flex items-center justify-between p-3">
            <p>CPU</p>
            <button className="btn btn-sm md:btn-md btn-outline btn-info">
              Choose
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PCBuildOptions;
