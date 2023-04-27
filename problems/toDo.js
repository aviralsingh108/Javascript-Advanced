// const itemArray = [];
function addItem() {
  const input = document.getElementById("ip").value;
  //container
  let container = document.getElementById("disp");
  //creating subContainer
  const subContainer = document.createElement("sub-container");
  // creating item
  const item = document.createElement("span");
  item.className = "item";
  const textNode = document.createTextNode(input);
  item.appendChild(textNode);
  //creating close btn
  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.innerHTML = "x";
  //inserting inside item and btn container
  subContainer.appendChild(item);
  subContainer.appendChild(closeBtn);
  container.appendChild(subContainer);
  closeBtn.addEventListener("click", () => {
    container.removeChild(subContainer);
  });
}
