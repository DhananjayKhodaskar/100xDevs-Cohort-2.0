import React from "react";
import { filterTodo } from "../atoms/todoAtom";
import { useRecoilValue } from "recoil";

const ToDoList = () => {
  const filteredList = useRecoilValue(filterTodo);

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {filteredList.map((todo, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          <span style={{ color: "red", marginRight: "5px" }}>{index + 1}</span>
          {todo}
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;
