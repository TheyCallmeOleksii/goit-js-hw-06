const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const fontSizeValue = fontSizeControl.value;

  textSpan.style.fontSize = `${fontSizeValue}px`;
});
