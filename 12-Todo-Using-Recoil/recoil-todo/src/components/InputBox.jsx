import React, { useCallback, useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoState } from "../atoms/todoAtom";

import Button from "./Button";

const InputBox = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodo = useSetRecoilState(todoState);

  const handleSubmit = useCallback(() => {
    setTodo((TodoList) => [...TodoList, inputValue]);
    setInputValue("");
  }, [setTodo, inputValue]);

  return (
    <div>
      {/* Input box */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add somthing to the list"
        onBlur={() => {
          setTimeout(() => setInputValue(""), [1000]);
        }}
      />

      {/* Button */}
      <Button handleSubmit={handleSubmit} />
    </div>
  );
};

export default InputBox;
