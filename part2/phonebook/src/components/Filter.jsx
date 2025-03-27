import React from "react";

const Filter = ({show , handleSearch}) => {
  return (
    <>
      <span>filter shown with</span>
      <input value={show} onChange={handleSearch} />
    </>
  );
};

export default Filter;
