import { memo, VFC } from "react";
import { IItemProps } from "../DropBody/DropBody";
import Style from "./Item.module.scss";
let Item: VFC<IItemProps> = ({
  flag,
  name,
  handleSelect,
  id,
  selected,
  withIcon,
}) => {
  return (
    <li role="option" className={Style.li123} aria-selected={selected}>
      <label className={Style.label}>
        <div className={Style.left}>
          {withIcon && <img className={Style.img} src={flag} alt={name} />}
          <p className={Style.name}>{name}</p>
        </div>
        <input
          type="checkbox"
          aria-checked={selected}
          className={Style.checkbox}
          checked={selected}
          tabIndex={-1}
          onChange={() => {
            handleSelect(id, selected);
          }}
        />
      </label>
    </li>
  );
};

Item = memo(Item);
export default Item;
