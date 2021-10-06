import React, { useEffect, useState, VFC } from "react";
import Style from "./Input.module.scss";
interface IInput {
  handlefiler: (str: string) => void;
}
const Input: VFC<IInput> = ({ handlefiler }) => {
  const [keyWord, setkeyWord] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkeyWord(e.target.value);
  };

  useEffect(() => {
    let debounce = setTimeout(() => handlefiler(keyWord), 400);
    return () => clearTimeout(debounce);
  }, [keyWord]);

  return (
    <div className={Style.wrapper}>
      <label htmlFor="search" className="sr-only">
        Поиск по списку
      </label>
      <input
        className={Style.input}
        type="text"
        placeholder="Поиск"
        id="search"
        value={keyWord}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default Input;
