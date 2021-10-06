import React, { Fragment, VFC } from "react";
import { ISelected } from "../DropBody/DropBody";
import cn from "classnames";
import Style from "./DropButton.module.scss";
import close from "../../assets/close.png";
import arrow from "../../assets/arrow.png";
interface IbuttonProps {
  selected: ISelected[];
  isOpend: boolean;
  multiple: boolean;
  handleSelect: (id: number, selected: boolean) => void;
  setisOpend: React.Dispatch<React.SetStateAction<boolean>>;
}
const DropButton: VFC<IbuttonProps> = ({
  selected,
  isOpend,
  setisOpend,
  multiple,
  handleSelect,
}) => {
  const dropClass = cn(Style.arrow, {
    [Style.rotate]: isOpend,
  });
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // @ts-ignore
    if (!e.target.className.includes("close")) {
      isOpend ? setisOpend(false) : setisOpend(true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "Enter") {
      isOpend ? setisOpend(false) : setisOpend(true);
    }
    if (e.code === "Space") {
      e.preventDefault();
      isOpend ? setisOpend(false) : setisOpend(true);
    }
    if (e.code === "Escape") setisOpend(false);

    return;
  };

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    // @ts-ignore
    if (e.target.className.includes("close")) {
      handleSelect(id, true);
    }
  };
  return (
    <div
      tabIndex={0}
      className={Style.topBtn}
      onClick={(e) => handleClick(e)}
      onKeyDown={(e) => handleKeyDown(e)}
      id="drop-btn"
      aria-label={`${isOpend ? "close" : "open"} list`}
      title={`${isOpend ? "close" : "open"} list`}
      aria-expanded={isOpend}
      aria-haspopup="listbox"
      aria-labelledby="drop-btn drop-elem"
    >
      <div className={Style.left}>
        {selected.length > 0 &&
          multiple &&
          selected.slice(0, 3).map((el) => (
            <div key={el.id} className={Style.wrapper}>
              <p className={Style.chosen}>{el.name}</p>
              <button
                tabIndex={-1}
                className={Style.close}
                onClick={(e) => handleClose(e, el.id)}
              >
                x
              </button>
            </div>
          ))}

        {selected.length === 0 && (
          <p className={Style.placeholder}>Выберите язык из списка</p>
        )}

        {selected.length === 1 && !multiple && (
          <p className={Style.single}>{selected[0].name}</p>
        )}
      </div>

      <img src={arrow} alt="" aria-hidden={true} className={dropClass} />
    </div>
  );
};

export default DropButton;
