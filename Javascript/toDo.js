// const itemArray = [];
function addItem() {
  const input = document.getElementById("ip").value;
  //container
  let container = document.getElementById("disp");
  //creating item and btn
  const itemAndBtn = document.createElement("div");
  itemAndBtn.className = "item-and-btn";
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
  itemAndBtn.appendChild(item);
  itemAndBtn.appendChild(closeBtn);
  container.appendChild(itemAndBtn);
  for (i = 0; i < itemAndBtn.length; i++) {
    itemAndBtn[i].onclick = () => {
      let div = this.parentElement;
      // div.remove();
      div.style.display = "none";
    };
  }
  // itemClose.style.display = "block";
  //   });
}

const itemAndBtn = document.getElementsByClassName("close");
let i;
for (i = 0; i < itemAndBtn.length; i++) {
  itemAndBtn[i].onclick = () => {
    let div = this.parentElement;
    // div.remove();
    div.style.display = "none";
  };
}
