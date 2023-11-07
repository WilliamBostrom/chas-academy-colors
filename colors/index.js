const add = document.querySelector(".add");
const remove = document.querySelector(".remove");
let list = document.getElementById("list");
let cirkle = document.querySelector(".cirkle");

// eventlistner på add knappen
add.addEventListener("click", function () {
  let color = prompt("Write a color (color, hex, rgb, rgba):");
  if (realColor(color)) {
    let newLi = document.createElement("li");
    newLi.style.color = color;
    newLi.appendChild(document.createTextNode(color));
    list.appendChild(newLi);

    cirkle.style.backgroundColor = color;
  } else {
    alert("Ogiltig färg");
  }
});

function realColor(color) {
  const promptColor = new Option().style;
  promptColor.color = color;
  return promptColor.color !== "";
}

remove.addEventListener("click", function () {
  if (list.childElementCount > 0) {
    list.removeChild(list.lastChild);
  }
  if (list.childElementCount >= 0) {
    cirkle.style.backgroundColor = list.lastChild.style.color;
  } else {
    cirkle.style.backgroundColor = "";
  }
});
