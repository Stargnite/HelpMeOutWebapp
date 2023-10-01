// document.addEventListener("DOMContentLoaded", () => {
  const cancel = document.querySelector("#cancel");
  const fullScreen = document.querySelector("#whole-screen");
  const oneTab = document.querySelector("#tab");
  const toggleCamera = document.querySelector("#toggle-camera");
  const toggleAudio = document.querySelector("#toggle-audio");

  cancel.addEventListener("click", () => {
    window.close();
  });

  // let choice

  fullScreen.addEventListener("click", () => {
    if (!fullScreen.classList.contains("choosen-tab")) {
      fullScreen.classList.add("choosen-tab");
      oneTab.classList.remove("choosen-tab");
    } else {
      fullScreen.classList.remove("choosen-tab");
    }
  });

  oneTab.addEventListener("click", () => {
    if (!oneTab.classList.contains("choosen-tab")) {
      oneTab.classList.add("choosen-tab");
      fullScreen.classList.remove("choosen-tab");
    } else {
      oneTab.classList.remove("choosen-tab");
    }
  });

  toggleCamera.addEventListener("click", () => {
    toggleCamera.classList.toggle("isActive");
  });

  toggleAudio.addEventListener("click", () => {
    toggleAudio.classList.toggle("isActive");
  });
// });
