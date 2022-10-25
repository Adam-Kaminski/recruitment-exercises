import data from "./db.json" assert { type: "json" };

const alert = document.querySelector(".alert");
const form = document.querySelector(".blog-form");
const listCointainer = document.querySelector(".list-cointainer");

const text = document.getElementById("text-id");
const postCointainer = document.getElementById("list-id");
const articleNumber = document.getElementById("article-number");

form.addEventListener("submit", addPost);
listCointainer.addEventListener("click", deletePost);

let posts = [...data];

function addPost(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  const value = text.value;
  if (!value) {
    displayAlert("please enter text", "danger");
  } else if (value) {
    displayAlert("post added", "success");
    const element = document.createElement("article");
    element.classList.add("list-post");
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class="vote-display">
    <button id="up"  class="btn-increase" onclick="increment(${id})" >
    <span class="material-symbols-outlined">
    arrow_drop_up
    </span>
    </button>
    <span class="vote-count" id="${id}">0</span>
    <button id="down" class="btn-decrease" onclick="decrement(${id})" >
    <span class="material-symbols-outlined">
    arrow_drop_down
    </span>
    </button>
  </div>
  <div>
    <p class="post">"${value}"
    </p>
    <div class="btn-display">
      <button class="delete-btn">Delete</button>
    </div>
  </div>`;

    listCointainer.appendChild(element);
    let postArr = {
      id: new Date().getTime().toString(),
      text: document.getElementById("text-id").value,
    };
    posts.push(postArr);
    document.getElementById("myform").reset();
    generateNumOfArt();
    console.log(posts, "posts(...data)");
  }
}

let countContainer = [];

function generateNumOfArt() {
  return (articleNumber.innerHTML = posts.length);
}
generateNumOfArt();

function generatePost() {
  return (postCointainer.innerHTML = posts
    .map(({ id, text }) => {
      return `<article class="list-post" id="data-id">
    <div class="vote-display">
           <button id="up"  class="btn-increase" onclick="increment(${id})">
           <span class="material-symbols-outlined">
           arrow_drop_up
           </span>
           </button>
           <span class="vote-count" id="${id}">0</span>
           <button id="down" class="btn-decrease"  onclick="decrement(${id})">
           <span class="material-symbols-outlined">
           arrow_drop_down
           </span>
           </button>
         </div>
         <div>
           <p class="post">"${text}"
           </p>
           <div class="btn-display">
             <button class="delete-btn">Delete</button>
           </div>
         </div>
  </article>`;
    })
    .join(""));
}
generatePost();

function deletePost(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const post = item.parentElement.parentElement.parentElement;
    post.remove();
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

window.increment = function (id) {
  let selectedItem = id;
  let search = countContainer.find((x) => x.id === id);
  if (search === undefined) {
    countContainer.push({
      id: id,
      item: 0,
    });
  } else {
    search.item += 1;
  }
  update(selectedItem);
};

window.decrement = function (id) {
  console.log(id);
  let selectedItem = id;
  let search = countContainer.find((x) => x.id === id);
  if (search.item === -10) return;
  else {
    search.item -= 1;
  }
  update(selectedItem);
};

const update = (id) => {
  let serch = countContainer.find((x) => x.id === id);
  document.getElementById(id).innerHTML = serch.item;
};
