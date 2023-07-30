import React from "react";

const KeyFeatures = ({ feature }) => {
  //   console.log(feature);
  return (
    <ul class="list-disc list-inside">
      <li class="text-base text-blue-500/50">{feature}</li>
    </ul>
  );
};

export default KeyFeatures;
