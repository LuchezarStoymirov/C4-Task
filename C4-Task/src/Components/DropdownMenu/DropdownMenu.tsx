import React from "react";
import style from "./DropdownMenu.module.css";

interface DropdownMenuProps {
  onSelect: (option: string, type: "filter" | "sort" | "all") => void;
  totalProducts: number;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ onSelect, totalProducts }) => {
  return (
    <div className={style.dropdownMenu}>
      <ul>
        <li
          className={style.filter}
          onClick={() => onSelect("Tissot", "filter")}
        >
          Tissot
        </li>
        <li
          className={style.filter}
          onClick={() => onSelect("Omega", "filter")}
        >
          Omega
        </li>
        <li
          className={style.filter}
          onClick={() => onSelect("Rolex", "filter")}
        >
          Rolex
        </li>
        <li className={style.filter} onClick={() => onSelect("", "all")}>
          Show All ({totalProducts})
        </li>
      </ul>
    </div>
  );
};
