import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>

      <p className="text-2xl text-purple-700 mt-5 animate-ping">Loading...</p>
    </div>
  );
};

export default Loading;
