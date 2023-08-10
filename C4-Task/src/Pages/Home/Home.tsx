import { useState } from "react";
import style from "./Home.module.css";
import { Header } from "../../Components/Header/Header";
import { NavBar } from "../../Components/NavBar/NavBar";
import { DropdownMenu } from "../../Components/DropdownMenu/DropdownMenu";
import { ProductGrid } from "../../Components/ProductGrid/ProductGrid";
import { Footer } from "../../Components/Footer/Footer";
import { cardData } from "../../MockData/cardData"; 

export const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const totalProducts = cardData.length; 

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSelect = (option: string, type: "filter" | "sort" | "all") => {
    switch (type) {
      case "filter":
        setFilter(option);
        break;
      case "sort":
        setSort(option);
        break;
      case "all":
        setFilter("");
        setSort("");
        break;
      default:
        break;
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <Header />
        <NavBar
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          onSearch={handleSearch}
        />
      </div>
      <ProductGrid filter={filter} sort={sort} search={searchTerm} />
      <Footer />
      {showMenu && <DropdownMenu onSelect={handleSelect} totalProducts={totalProducts} />} {/* Pass the totalProducts prop */}
    </div>
  );
};
