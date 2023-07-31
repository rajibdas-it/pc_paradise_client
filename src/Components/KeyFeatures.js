import React from "react";

const KeyFeatures = ({ feature }) => {
  //   console.log(feature);
  return (
    <ul className="list-disc list-inside">
      <li className="text-base text-blue-500/50">{feature}</li>
    </ul>
  );
};

export default KeyFeatures;
