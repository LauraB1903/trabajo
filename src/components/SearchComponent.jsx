import React, { useState } from "react";

const SearchComponent = ({ traer }) => {
  const [buscador, setBuscador] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setBuscador(inputValue);
    traer(inputValue);
  };

  return (
    <div className="s">
      <input type="text" onChange={handleChange} value={buscador} placeholder="Buscar" />
    </div>
  );
};

export default SearchComponent