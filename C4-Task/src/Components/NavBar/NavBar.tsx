import React from "react";
import style from "./NavBar.module.css";

interface NavBarProps {
  showMenu: boolean;
  toggleMenu: () => void;
  onSearch: (value: string) => void; 
}

export const NavBar: React.FC<NavBarProps> = ({ toggleMenu, onSearch }) => {
  return (
    <div className={style.container}>
      <button className={style.filterButton} onClick={toggleMenu}></button>
      <input
        type="search"
        className={style.searchBar}
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)} 
      />
    </div>
  );
};
