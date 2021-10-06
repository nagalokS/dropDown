import { FC, useCallback, useEffect, useState } from "react";
import { DropButton } from "../DropButton";
import { DropList } from "../DropList";
import Input from "../Input";
import Ru from "../../assets/Ru.png";
import En from "../../assets/En.png";
import germany from "../../assets/germany-1.png";
import italy from "../../assets/italy-1.png";
import poland from "../../assets/poland-1.png";
import spain from "../../assets/spain-1.png";
import Style from "./DropBody.module.scss";

const countries = [
  { id: 0, name: "Русский", flag: Ru, selected: false },
  { id: 1, name: "Английский", flag: En, selected: false },
  { id: 2, name: "Испанский", flag: spain, selected: false },
  { id: 3, name: "Немецкий", flag: germany, selected: false },
  { id: 4, name: "Итальянский", flag: italy, selected: false },
  { id: 5, name: "Польский", flag: poland, selected: false },
];

export type ICountry = typeof countries[number];
export type IItemProps = ICountry & {
  handleSelect: (id: number, wasSelected: boolean) => void;
} & {
  withIcon: boolean;
};
export type ISelected = Omit<ICountry, "flag" | "selected">;
interface IDropBodyProps {
  multiple?: boolean;
  withIcon?: boolean;
}

const DropBody: FC<IDropBodyProps> = ({
  multiple = false,
  withIcon = true,
}) => {
  const [isOpend, setisOpend] = useState(false);
  const [items, setItems] = useState(countries);
  const [filtered, setFiltered] = useState(countries);
  const close = useCallback(() => setisOpend(false), []);
  const open = useCallback(() => setisOpend(true), []);

  console.log("%c body rerender", "color:green");

  const handleSelect = useCallback((id: number, wasSelected: boolean) => {
    const newItems = items.map((el) => {
      el.id !== id ? (el.selected = false) : (el.selected = !wasSelected);
      return el;
    });
    setItems(newItems);
    close();
  }, []);

  const handleSelectMult = useCallback((id: number, wasSelected: boolean) => {
    const newItems = items.map((el) => {
      el.id !== id ? void 0 : (el.selected = !wasSelected);
      return el;
    });
    console.log("neaitems", newItems);

    setItems(newItems);
  }, []);

  const handlefiler = useCallback((str: string) => {
    const filtered2 = items.filter((el) =>
      el.name.toLocaleLowerCase().startsWith(str.toLocaleLowerCase())
    );
    setFiltered(filtered2);
  }, []);

  return (
    <div className={Style.main}>
      <p className={Style.small}>Язык</p>
      <DropButton
        multiple={multiple}
        isOpend={isOpend}
        setisOpend={setisOpend}
        handleSelect={multiple ? handleSelectMult : handleSelect}
        selected={items.filter((el) => el.selected === true)}
      />
      {isOpend && (
        <>
          <DropList
            items={filtered.length !== items.length ? filtered : items}
            handleSelect={multiple ? handleSelectMult : handleSelect}
            withIcon={withIcon}
          >
            <Input handlefiler={handlefiler} />
          </DropList>
          <div aria-hidden="true" className={Style.backdrop} onClick={close} />
        </>
      )}
    </div>
  );
};

export default DropBody;
