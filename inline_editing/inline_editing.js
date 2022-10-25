const eventHandler = function (e) {
  e.preventDefault();
  editDiv(this);
};
document.querySelector(".editable").addEventListener("click", eventHandler);

function editDiv(div) {
  const text = div.innerText,
    input = document.createElement("INPUT");
  input.value = text;
  div.innerHTML = "";
  div.append(input);
  input.focus();
  input.addEventListener("focusout", function (e) {
    finishEditDiv(div);
  });

  div.removeEventListener("click", eventHandler);
}

function finishEditDiv(div) {
  const text = div.querySelector("input").value;
  div.innerHTML = text;
  document.querySelector(".editable").addEventListener("click", eventHandler);
}
