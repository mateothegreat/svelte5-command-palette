
function handleKeyDown(event: KeyboardEvent) {
  if (event.key === "Escape") {
  }
};

function handleCtrlK(event: KeyboardEvent) {
  if (event.ctrlKey && event.key === "k") {
    console.log("Ctrl + K pressed");
    // Add your desired functionality here
  }
}

export const listenForCommandPalette = () => {
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keydown", handleCtrlK);
}
