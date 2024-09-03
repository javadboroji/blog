"use client";
import React, { useEffect, useState } from "react";
import { news } from "./localData";

function BreakingNews() {
  const [activeNews, setActiveNews] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveNews((prevIndex) => (prevIndex + 1) % news.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {}, [activeNews]);

  return (
    <>
      {news.map((item, i) => {
        return (
          <span
            className={`text-white px-2 transition ease-linear delay-150  ${
              i === activeNews ? "translate-y-0 " : "-translate-y-[100px]"
            }`}
          >
            {i === activeNews && news[activeNews]}
          </span>
        );
      })}
    </>
  );
}

export default BreakingNews;
