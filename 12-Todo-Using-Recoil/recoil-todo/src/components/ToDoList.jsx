import React from "react";
import { filterTodo } from "../atoms/todoAtom";
import { useRecoilValue } from "recoil";
const ToDoList = () => {
  const filteredList = useRecoilValue(filterTodo);

  return (
    <>
      {filteredList.map((todo, index) => {
        return (
          <div>
            <p1 key={index}>{todo}</p1>
          </div>
        );
      })}
    </>
  );
};

export default ToDoList;
