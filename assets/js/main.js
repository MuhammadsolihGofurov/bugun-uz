document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 500,
  });

  //   offcanvas
  if (document.querySelectorAll("[data-offcanvas-btn]")) {
    let btns = document.querySelectorAll("[data-offcanvas-btn]");
    btns.forEach(function (button) {
      button.addEventListener("click", function () {
        let offcanvasId = button.getAttribute("data-offcanvas-btn");
        let offcanvasElement = document.getElementById(offcanvasId);
        offcanvasElement.classList.add("active");
      });
    });
    let closeBtns = document.querySelector("#offcanvas__close");
    closeBtns.addEventListener("click", () => {
      document.querySelector(".offcanvas").classList.remove("active");
    });
    let offcanvas = document.querySelectorAll(".offcanvas");
    offcanvas.forEach((item) => {
      item.addEventListener("click", () => {
        item.classList.remove("active");
      });
      item.querySelector(".offcanvas__box").addEventListener("click", (e) => {
        e.stopPropagation();
      });
    });
  }
});
