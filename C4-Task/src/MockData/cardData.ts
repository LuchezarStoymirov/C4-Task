export const cardData: {
  image: string;
  title: string;
  description: string;
  price: string;
}[] = [
  ...Array(10).fill({
    image: "src/Images/watch1.jpeg",
    title: "Tissot",
    description: "Brass Plated wrist watch",
    price: "$200",
  }),
  ...Array(10).fill({
    image: "src/Images/watch2.jpeg",
    title: "Omega",
    description: "Premium quality wrist watch",
    price: "$1500",
  }),
  ...Array(10).fill({
    image: "src/Images/watch3.jpeg",
    title: "Rolex",
    description: "Exclusive wrist watch for the chosen few.",
    price: "$4700",
  }),
  ...Array(5).fill({
    image: "src/Images/watch3.jpeg",
    title: "Rolex",
    description: "Exclusive wrist watch for the chosen few.",
    price: "$4700",
  }),
];
