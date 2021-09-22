// selecting elements

const popupContainer = document.querySelector(".popup-container");
const btnClose = document.querySelector(".btn-close");
const popupLink = document.querySelector(".ad-link");
const adImage = document.querySelector(".ad-image");

// for closing popup
const closePopup = () => {
  popupContainer.classList.contains("popup-open") &&
    popupContainer.classList.remove("popup-open");
};

// close popup
btnClose.addEventListener("click", closePopup);

// esc key close popup
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});

// check difference between time passed
const checkDiff = (value, itemName) => {
  if (!value) {
    value = new Date().toString();
    localStorage.setItem(itemName, value);
  }

  // check the diff to see if it has been 10min since the last popup
  return new Date().getTime() - new Date(value).getTime();
};

window.setInterval(function () {
  // First check, if localStorage is supported.
  if (window.localStorage) {
    // time of the previous popup
    let prevPopup = localStorage.getItem("prevPopup");

    // getting the difference between current time and the time of the last popup (in milisecond)
    let diff = checkDiff(prevPopup, "prevPopup");

    // if the condition meets then open popup and set the timer
    if (diff >= 1000 * 60 * 10) {
      localStorage.setItem("prevPopup", new Date().toString());
      popupContainer.classList.add("popup-open");
    }
  } else {
    // if local storage isn't available then it'll follow the traditional way of interval
    setInterval(() => {
      popupContainer.classList.add("popup-open");
    }, 1000 * 60 * 10);
  }
}, 1000);

// initialization
window.onload = function () {
  popupContainer.classList.add("popup-open");
};
