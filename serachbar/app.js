import data from "./data.js";

const itemColorTemplate = document.querySelector("[data-item-template]");
const listColorTemplate = document.querySelector("[data-list-template]");
const searchInput = document.querySelector("[data-search]");
const bInput = document.getElementById("input-color");
const btn = document.getElementById("clear");

let items = [];

searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  items.forEach((item) => {
    const isVisible = item.title.toLowerCase().includes(value);
    item.element.classList.toggle("hide", !isVisible);
  });
});

bInput.addEventListener("click", (e) => {
  {
    data.map(({ title }) => {
      if (title === bInput.value) {
        bInput.style.color = "lime";
      } else if (bInput.value === "") {
        bInput.style.backgroundColor = "";
      }
    });
  }
});

items = data.map(({ title, color }) => {
  const list = itemColorTemplate.content.cloneNode(true).children[0];
  const header = list.querySelector("[data-header]");
  const body = list.querySelector("[data-body]");
  header.textContent = title;
  body.textContent = color;
  listColorTemplate.append(list);
  console.log(title);
  return { title, color, element: list };
});

btn.addEventListener("click", clearAll);

function clearAll() {
  searchInput.value = "";
  items.toggle("hide", false);
}

searchInput.addEventListener("input", (e) => {
  document.title = bInput.value;
});
