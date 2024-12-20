// "use strict";
const questionTab = document.querySelectorAll(".questions");
// looping through questions

questionTab.forEach((e) =>
  e.addEventListener("click", () => {
    if (e.parentNode.classList.contains("active")) {
      e.parentNode.classList.toggle("active");
    } else {
      questionTab.forEach((e) => e.parentNode.classList.remove("active"));
      e.parentNode.classList.add("active");
    }
  })
);
