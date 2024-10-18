import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { ANSWER_SCREEN } from "../../redux/reducers/reducers";
// import MathJax from "../latex/mathjax";
import Image from 'next/image';

const AnswerScreen = ({ heading, content_list, attention }) => {
  // Get array in the props for content
  const { v4: uuidv4 } = require("uuid");

  const latestScreenUpdated = attention;

  console.log(content_list);

  return (
    <div
      className={`flex w-full flex-col rounded-xl border-2 p-9 ${
        latestScreenUpdated == ANSWER_SCREEN
          ? "border-custom_blue-500 bg-custom_blue-100 shadow-xl"
          : "border-custom_black-500"
      } overflow-scroll h-96`} style={{maxHeight: "500px"}}
    >
      <h2>{heading}</h2>
      <div className="gap-10">
        {content_list.map((item) => {
          // console.log(item.typeScreen);
          return item ? (
            <>
              <div key={uuidv4()} className="flex flex-col gap-2">
                {/* Heading of single update */}
                {/* <MathJax /> */}

                <h3 className="items-center text-base font-bold text-custom_black-500 md:text-xl">
                  {item.heading}
                </h3>
                <div className="fex-row flex justify-between items-center" >
                  {item.question ? (
                    <h5 className="mr-4 text-xs max-w-md font-semibold italic text-custom_black-500 opacity-50">
                      {item.question}
                    </h5>
                  ) : (
                    <div></div>
                  )}
                  <span className="rounded-2xl border border-custom_black-500 px-2 text-xs xl:text-sm font-normal text-custom_black-500">
                    {item.mark} Mark{(item.mark > 1)? 's': ''}
                  </span>
                </div>
                {item.typeScreen == "image" ? (
                  <Image
                    src={item.answer}
                    alt="Failed to show image"
                    width={240}
                    height={200}
                  />
                ) : (
                  <p
                    className="text-xs text-custom_black-500"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                )}

                {/* Question of single update */}
                {/* Explanation of single update */}
              </div>
            </>
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default AnswerScreen;