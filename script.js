let container = document.querySelector("#container");

makeGrid(32);

let button = document.querySelector("button");
button.addEventListener("click", (e) => {
  let size = prompt("give size:", 16);
  makeGrid(size);
})




function makeGrid(size) {
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.className = "column";
    container.appendChild(column);
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div")
      cell.className = "cell";
      column.appendChild(cell);
    }
  }
  let cells = document.querySelectorAll(".cell")
  cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
      cell.className = "cell-hovered";
    })
  })
}