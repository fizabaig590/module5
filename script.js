const specialsTile = document.getElementById("specials");
const logoLink = document.querySelector(".logo a");

const categories = ["Lunch", "Dinner"];

function getRandomCategory() {
  const randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}

specialsTile.addEventListener("click", () => {
  const randomCategory = getRandomCategory();
  window.location.href = `single-category.html?category=${randomCategory}`;
});

logoLink.addEventListener("click", () => {
  window.location.href = "index.html";
});
