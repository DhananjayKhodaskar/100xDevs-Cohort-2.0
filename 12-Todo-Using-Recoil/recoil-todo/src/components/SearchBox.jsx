import React from "react";
import { useRecoilState } from "recoil";
import { searchState } from "../atoms/todoAtom";

const SearchBox = () => {
  const [search,setSearch] = useRecoilState(searchState);
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search todo list..."
        onBlur={()=>setSearch("")}
      />
    </div>
  );
};

export default SearchBox;
