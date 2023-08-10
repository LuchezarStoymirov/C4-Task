import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import style from "./Productgrid.module.css";
import { Card } from "../Card/Card";
import { cardData } from "../../MockData/cardData";

interface ProductGridProps {
  filter: string;
  sort: string;
  search: string;
}

interface CardData {
  image: string;
  title: string;
  description: string;
  price: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  filter,
  sort,
  search,
}) => {
  const [visibleCards, setVisibleCards] = useState(10);
  const [spacing, setSpacing] = useState(2);
  const [filteredData, setFilteredData] = useState<CardData[]>(cardData);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 10);
  };

  useEffect(() => {
    const updateSpacing = () => {
      setSpacing(window.innerWidth < 768 ? 1 : 2);
    };

    window.addEventListener("resize", updateSpacing);
    updateSpacing(); 

    return () => {
      window.removeEventListener("resize", updateSpacing);
    };
  }, []);

  useEffect(() => {
    let data = cardData;

    if (search) data = data.filter((card) => card.title.includes(search));
    if (filter) data = data.filter((card) => card.title === filter);
    if (sort === "asc")
      data = data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    if (sort === "desc")
      data = data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

    setFilteredData(data);
  }, [filter, sort, search]);

  const createCard = (card: CardData, index: number) => {
    const rowIdx = Math.floor(index / (window.innerWidth < 768 ? 2 : 5));
    const animationDelay = `${rowIdx * 0.2}s`; // Adjust the multiplier to change the delay between rows
    return (
      <Grid
        key={index}
        item
        xs={6}
        md={2.4}
        style={{ animationDelay }}
        className={style["fade-in"]}
      >
        <Card card={card} />
      </Grid>
    );
  };

  return (
    <div className={style.container}>
      <Grid container spacing={spacing} className={style.gridContainer}>
        {filteredData.slice(0, visibleCards).map(createCard)}
      </Grid>
      {visibleCards < filteredData.length && (
        <button onClick={loadMoreCards} className={style.loadButton}>
          Load More {Math.min(10, filteredData.length - visibleCards)}
        </button>
      )}
    </div>
  );
};
