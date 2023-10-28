import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-slate-50 flex justify-around w-full pt-[6rem]">
      {children}
    </div>
  );
};

export default Container;
