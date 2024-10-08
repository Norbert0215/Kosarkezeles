const products = [
  {
  id: 1,
  name: "Choco Bliss",
  price: 1200,
  picture: "choco_bliss.jpg", // Link to the chocolate image
  description: "A smooth and creamy milk chocolate with a hint of vanilla. Perfect for chocolate lovers!",
  },
  {
  id: 2,
  name: "Candy Delight",
  price: 800,
  picture: "Candy delight.jpg", // Link to the candy image
  description: "Delicious fruity candies that melt in your mouth. Great for kids and adults alike!",
  },
  {
  id: 3,
  name: "Bonbon Royale",
  price: 3000,
  picture: "Bonbon royale.jpg", // Link to the bonbon image
  description: "Premium bonbons filled with exotic flavors. A luxurious treat for special occasions.",
  },
  {
  id: 4,
  name: "Hazel Dream",
  price: 1500,
  picture: "Hazel dream.jpg", // Link to the hazelnut chocolate image
  description: "Rich dark chocolate with crunchy hazelnut pieces. Perfect for those who enjoy a nutty flavor!",
  },
  {
  id: 5,
  name: "Lemon Chew",
  price: 500,
  picture: "Lemon Chew.jpg", // Link to the lemon candy image
  description: "Tangy lemon chews that pack a punch of citrusy flavor. Refreshing and sweet!",
  },
  {
  id: 6,
  name: "Caramel Treat",
  price: 2000,
  picture: "Caramel Treat.jpg", // Link to the caramel chocolate image
  description: "Smooth caramel covered in milk chocolate. A delightful combination of sweetness and richness.",
  },
  {
  id: 7,
  name: "Berry Blast",
  price: 1000,
  picture: "Berry Blast.jpg", // Link to the berry candy image
  description: "Mixed berry-flavored candies that burst with juicy flavors in every bite. Great for snacking!",
  },
  {
  id: 8,
  name: "Truffle Heaven",
  price: 4000,
  picture: "Truffle Heaven.jpg", // Link to the truffle image
  description: "Decadent chocolate truffles filled with smooth ganache. Perfect for gifting or indulging.",
  },
  {
  id: 9,
  name: "Minty Fresh",
  price: 700,
  picture: "Minty Fresh.jpg", // Link to the mint candy image
  description: "Refreshing mint candies that leave a cool sensation in your mouth. Great after meals!",
  },
  {
  id: 10,
  name: "Crunchy Delight",
  price: 2500,
  picture: "Crunchy Delight.jpg", // Link to the crunchy chocolate image
  description: "A delightful chocolate bar with crispy rice pieces for an extra crunch in every bite.",
  },
  {
  id: 11,
  name: "Vanilla Bonbon",
  price: 3500,
  picture: "Vanilla Bonbon.jpg", // Link to the vanilla bonbon image
  description: "Soft and creamy vanilla bonbons with a touch of white chocolate. A delicate and delicious treat.",
  },
  {
  id: 12,
  name: "Orange Twist",
  price: 600,
  picture: "Orange Twist.jpg", // Link to the orange candy image
  description: "Zesty orange-flavored candies that are sweet, tangy, and perfect for a citrus kick.",
  }

];

const makeBoxes = (data) => {
  return data.map(({ price, id, name, description, picture }) => 
    `<div id="${id}" class="product-card">
      <img src="img/${picture}" alt="${name}">
      <h3>${name}</h3>
      <p>${description}</p>
      <p>Ár: ${price} Ft</p>
    </div>`
  );
};

const render = (data) => {
  const boxes = document.querySelector(".products"); 
  boxes.innerHTML = data.join("");
};

const filter = () => {
  const minPrice = document.querySelector("#min-price");
  const maxPrice = document.querySelector("#max-price");
  return products.filter(product => Number(product.price) >= Number(minPrice.value) && Number(product.price) <= Number(maxPrice.value)
  );
};

const filterButtonManagement = () => {
  const newProductsList = makeBoxes(filter());
  render(newProductsList);
};

document.addEventListener("DOMContentLoaded", () => {
  const productList = makeBoxes(products);
  render(productList);

  const filterButton = document.querySelector("#filter-btn");
  filterButton.addEventListener("click", filterButtonManagement);
});
