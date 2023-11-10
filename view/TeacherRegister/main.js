const form = document.querySelector("form");
const choose = document.querySelector(".register__profilePic");
const file = document.getElementById("profilePic");
const fullname = document.querySelector(".register__fullname");
const description = document.querySelector(".register__description");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(fullname.value);
  console.log(description.value);
});

choose.addEventListener("click", () => {
  file.click();
});
