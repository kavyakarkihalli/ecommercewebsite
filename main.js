let count = 0;
const jsonData = [
  {
    imgSrc: "img1.webp",
    title: "flower Pot",
    price: "10.24",
  },
  {
    imgSrc: "img2.webp",
    title: "Plant",
    price: "15.99",
  },
  {
    imgSrc: "img3.webp",
    title: "flower Pot",
    price: "20.24",
  },
  {
    imgSrc: "img4.webp",
    title: "Plant",
    price: "15.00",
  },
  {
    imgSrc: "img5.avif",
    title: "flower Pot",
    price: "12.24",
  },
  {
    imgSrc: "img6.jpg",
    title: "Plant",
    price: "25.99",
  },
  {
    imgSrc: "img7.webp",
    title: "flower Pot",
    price: "10.24",
  },
  {
    imgSrc: "img8.avif",
    title: "Plant",
    price: "15.99",
  },
   {
    imgSrc: "img9.jpg",
    title: "flower Pot",
    price: "12.12",
  },
    {
    imgSrc: "img10.jpg",
    title: "Plant",
    price: "11.90",
  },
     {
    imgSrc: "img11.jpg",
    title: "flower Pot",
    price: "13.99",
  },
      {
    imgSrc: "img12.jpg",
    title: "Plant",
    price: "11.99",
  },
       {
    imgSrc: "img13.jpg",
    title: "flower Pot",
    price: "14.99",
    
  },
        {
    imgSrc: "img14.jpg",
    title: "Plant",
    price: "15.89",
  },
         {
    imgSrc: "img15.jpg",
    title: "flower Pot",
    price: "11.99",
  },
];

function createCards() {
  const container = document.getElementById("cardContainer");

  jsonData.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImg = document.createElement("div");
    cardImg.classList.add("card_img");

    const img = document.createElement("img");
    img.src = item.imgSrc;

    const icons = document.createElement("div");
    icons.classList.add("icons");

    const heartIcon = document.createElement("a");
    heartIcon.classList.add("fa-solid", "fa-heart");
    heartIcon.addEventListener("click", () => addToWishlist(index));

    const addToCartBtn = document.createElement("a");
    addToCartBtn.textContent = "add to cart";
    addToCartBtn.classList.add("card_btn");
    addToCartBtn.addEventListener("click", () => addToCart(index));

    const shareIcon = document.createElement("a");
    shareIcon.href = "#";
    shareIcon.classList.add("fa-solid", "fa-share");

    const content = document.createElement("div");
    content.classList.add("content");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("div");
    price.classList.add("price");
    price.textContent = "$" + item.price;

    icons.appendChild(heartIcon);
    icons.appendChild(addToCartBtn);
    icons.appendChild(shareIcon);

    cardImg.appendChild(img);
    cardImg.appendChild(icons);

    content.appendChild(title);
    content.appendChild(price);

    card.appendChild(cardImg);
    card.appendChild(content);

    container.appendChild(card);
  });
}

function goToCart() {
  document.getElementById("all-section").style.display = "none";
  document.getElementById("cart-section").style.display = "block";
  document.getElementById("wishlist-section").style.display = "none";
}

function goToAll() {
  document.getElementById("all-section").style.display = "block";
  document.getElementById("cart-section").style.display = "none";
  document.getElementById("wishlist-section").style.display = "none";
}

function goToWishList() {
  document.getElementById("all-section").style.display = "none";
  document.getElementById("cart-section").style.display = "none";
  document.getElementById("wishlist-section").style.display = "block";
}

function updateCartCount() {
  const cartCountElement = document.getElementById("cartCount");
  cartCountElement.textContent = count;
}

function addToCart(index) {
  updateCartCount();
  cart.push({ ...categories[index] });
  displaycart();
}

function addToWishlist(index) {
  wish.push({ ...categoriesWish[index] });
  displaywishlist();
}

createCards();
goToAll();
const categories = [
  ...new Set(
    jsonData.map((item) => {
      return item;
    })
  ),
];

const categoriesWish = [
  ...new Set(
    jsonData.map((item) => {
      return item;
    })
  ),
];

var cart = [];
var wish = [];

function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function delElementWish(a) {
  wish.splice(a, 1);
  displaywishlist();
}

function displaycart() {
  let j = 0,
    total = 0;
  document.getElementById("cartCount").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ " + 0 + ".00";
  } else {
    document.getElementById("cartItem").innerHTML = cart
      .map((items) => {
        var { imgSrc, title, price } = items;
        total += parseFloat(price);
        document.getElementById("total").innerHTML = "$ " + total;
        return (
          `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${imgSrc}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

function displaywishlist() {
  let j = 0;
  if (wish.length == 0) {
    document.getElementById("wishItem").innerHTML = "Your Wishlist is empty";
  } else {
    document.getElementById("wishItem").innerHTML = wish
      .map((items) => {
        var { imgSrc, title, price } = items;
        return (
          `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${imgSrc}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>$ ${price}</h2>` +
              "<i class='fas fa-shopping-cart' onclick='addToCart(" +
              j +
              ")'></i>"
              +
              "<i class='fa-solid fa-trash' onclick='delElementWish(" +
              j++ +
              ")'></i></div>"
        );
      })
      .join("");
  }
}
