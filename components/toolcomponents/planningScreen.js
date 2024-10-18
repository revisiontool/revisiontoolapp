import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PLANNING_SCREEN } from "../../redux/reducers/reducers";
import MathJax from "../latex/mathjax";

const PlanningScreen = ({ heading, content_list, attention }) => {
  // Get array in the props for content
  const { v4: uuidv4 } = require("uuid");


  // const state = useSelector((state) => state);
  const latestScreenUpdated = attention;
  if (content_list === undefined){
    content_list = []
  }

  return (
    <div
      className={`flex w-full flex-col rounded-xl border-2 p-9 ${
        latestScreenUpdated == PLANNING_SCREEN
          ? "border-custom_blue-500 bg-custom_blue-100 shadow-xl"
          : "border-custom_black-500"
      } overflow-scroll h-80`} style={{maxHeight: "500px"}}
    >
      <h2>{heading}</h2>
      <div className="gap-4">
        {content_list.map((item, index) => {
          return item ? (
            <>
              <div key={uuidv4()} className="flex flex-col gap-2">
                {/* Heading of single update */}
                <h3 className="text-base font-bold text-custom_black-500 md:text-xl">
                  {item.heading}
                </h3>
                <h5 className="text-xs font-semibold italic text-custom_black-500 opacity-50">
                  {item.question}
                </h5>
                <p className="text-xs text-custom_black-500">{item.answer}</p>
                {/* Question of single update */}
                {/* Explanation of single update */}
              </div>
            </>) : <></>
        })}
      </div>
    </div>
  );
};

export default PlanningScreen;
