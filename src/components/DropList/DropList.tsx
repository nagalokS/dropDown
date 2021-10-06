import React, { FC } from "react";
import { ICountry } from "../DropBody/DropBody";
import Item from "../Item";
import Style from "./DropList.module.scss";

interface IProps {
  items: ICountry[];
  handleSelect: (id: number, wasSelected: boolean) => void;
  withIcon: boolean;
}
let DropList: FC<IProps> = ({ children, items, handleSelect, withIcon }) => {
  return (
    <div className={Style.list}>
      {children}
      <ul role="listbox" id="drop-elem" aria-labelledby="drop-btn drop-elem">
        {items.length > 0 &&
          items.map((el) => (
            <Item
              withIcon={withIcon}
              id={el.id}
              handleSelect={handleSelect}
              key={el.id}
              flag={el.flag}
              name={el.name}
              selected={el.selected}
            />
          ))}
        {items.length === 0 && (
          <p className={Style.empty}>По вашему запросу ничего не найдено!</p>
        )}
      </ul>
    </div>
  );
};

// DropList = memo(DropList, (prev, next) => {
//   return true;
// });
export default DropList;
