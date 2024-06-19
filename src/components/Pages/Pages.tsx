import Input from "@mui/joy/Input";
import React, { useState } from "react";

const Pages = (props) => {
  const { setPage } = props;
  const [inputPage, setInputPage] = useState(1);

  const incrementValue = () => {
    setInputPage((prevState) => prevState + 1);
    setPage((prevState) => prevState + 1);
  };

  const decrementValue = () => {
    if (inputPage > 1) setInputPage((prevState) => prevState - 1);
    setPage((prevState) => prevState - 1);
  };

  return (
    <div style={{ display: "inline" }}>
      <button onClick={decrementValue}>Пред</button>
      <Input
        color="primary"
        disabled={false}
        size="md"
        variant="soft"
        value={inputPage}
        onChange={(event) => {
          setInputPage(Number(event.target.value));
          setPage(Number(event.target.value));
        }}
      />
      <button onClick={incrementValue}>След</button>
    </div>
  );
};

export default Pages;
