function handlePaste(e) {
  const paste = (e.clipboardData || window.clipboardData).getData("text");
  appendElement(paste);
  e.preventDefault();
}

function appendElement(paste) {
  const top = Math.round(Math.random() * window.innerWidth);
  const left = Math.round(Math.random() * window.innerHeight);
  const elem = document.createElement("div");
  elem.innerText = paste;
  elem.style.position = "absolute";
  elem.style.top = `${top}px`;
  elem.style.left = `${left}px`;

  document.getElementById("container").appendChild(elem);
}

window.onload = function() {
  const $text = document.getElementById("text");
  $text.addEventListener("paste", handlePaste);
}
