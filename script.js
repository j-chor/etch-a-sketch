let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
  let column = document.createElement("div");
  column.className = "column";
  container.appendChild(column);
  for (let j = 0; j < 16; j++) {
    let cell = document.createElement("div")
    cell.className = "cell";
    column.appendChild(cell);
  }
}