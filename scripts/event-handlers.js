const dialog = document.getElementById("save-dialog");
const openButton = document.querySelector(".footer__save-button");
const closeButton = document.getElementById("dialog-close-btn");

openButton.addEventListener("click", function () {
  dialog.showModal();
});

closeButton.addEventListener("click", function () {
  dialog.close();
});
