import React from "react";
import { MoonLoader } from "react-spinners";

const Spinner = (props) => {
  return (
    <>
      <p className="text-center">{props.title ?? "Loading please wait"}</p>
      <MoonLoader color="#E07A5F" />
    </>
  );
};

export default Spinner;
