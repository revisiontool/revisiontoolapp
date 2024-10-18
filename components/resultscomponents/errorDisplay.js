import React from "react";

const ErrorDisplay = ({ text }) => {
  return (
    <div className="">
      <span className="text-xl font-bold text-custom_black-500 sm:text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
        {text}
      </span>
    </div>
  );
};

export default ErrorDisplay;
