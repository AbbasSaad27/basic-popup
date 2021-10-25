let popupContainer;
let btnClose;

const popupHtml = `
<div class="popup-container">
  <div class="popup-box">
    <a
      href="https://sflix.to/watch-movie/free-candyman-hd-71512.4646929/"
      target="_blank"
      class="ad-link"
    >
      <img
        src="https://i.imgur.com/UUijo0H.gif"
        alt="popup"
        class="ad-image"
      />
    </a>
    <button type="button" class="btn-close">
      <img
        src="https://streamrapid.ru/images/close.png"
        alt="close"
        class="close-icon"
      />
    </button>
  </div>
</div>`;

const popupCss = `a {
  color: unset;
  text-decoration: none;
}
button {
  border: none;
  cursor: pointer;
}
.popup-container {
  width: 100vw;
  height: 100vh;
  transform: scale(0);
  transition: all 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-box {
  width: 30%;
  position: relative;
}
.ad-image {
  width: 100%;
}
.popup-open {
  transform: scale(1);
}
.btn-close {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid aquamarine;
}
.close-icon {
  height: 20px;
  width: 20px;
  pointer-events: none;
}
@media only screen and (max-width: 860px) {
  html {
    font-size: 58%;
  }
  .popup-box {
    width: 50%;
  }
}
@media only screen and (max-width: 560px) {
  html {
    font-size: 55%;
  }
  .popup-box {
    width: 80%;
  }
}
`;

const closePopup = () => {
  popupContainer.classList.contains("popup-open") &&
    popupContainer.classList.remove("popup-open");
};

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closePopup();
  }
});

window.setInterval(function () {
  popupContainer.classList.add("popup-open");
}, 1000 * 60 * 10);

window.onload = function () {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = popupCss;
  document.head.appendChild(styleEl);
  document.body.insertAdjacentHTML("afterbegin", popupHtml);
  popupContainer = document.querySelector(".popup-container");
  btnClose = document.querySelector(".btn-close");
  btnClose.addEventListener("click", closePopup);
  popupContainer.classList.add("popup-open");
};
