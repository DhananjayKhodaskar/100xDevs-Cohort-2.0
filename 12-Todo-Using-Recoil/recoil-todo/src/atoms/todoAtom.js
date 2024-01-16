import { atom, selector } from "recoil";

export const todoState = atom({
  key: "todoState",
  default: [],
});

export const searchState = atom({
  key: "searchState",
  default: "",
});

export const filterTodo = selector({
  key: "filterTodo",
  get: ({ get }) => {
    const todoList = get(todoState);
    const searchText = get(searchState);

    const filteredTodo = todoList.filter((todoListItem) =>
      todoListItem.toLowerCase().includes(searchText.toLowerCase())
    );

    return filteredTodo;
  },
});
