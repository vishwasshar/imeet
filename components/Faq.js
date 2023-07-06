import React from "react";
import { useRef } from "react";

const Faq = (props) => {
  const pRef = useRef();
  const showAns = () => {
    const height = pRef.current.style.height;
    height == "0px"
      ? (pRef.current.style.height = "auto")
      : (pRef.current.style.height = "0px");
  };
  return (
    <li className="border-b mb-2 cursor-pointer select-none" onClick={showAns}>
      <h3 className="font-semibold">
        Que.{props.id + 1} {props.data.que}?
      </h3>
      <p
        ref={pRef}
        className=" overflow-hidden text-sm transition-all"
        style={{ height: "0px" }}
      >
        <b className="font-semibold">Ans. </b>
        {props.data.ans}
      </p>
    </li>
  );
};

export default Faq;
