const form = document.querySelector("form");
const register = document.querySelector(".login__register");

register.addEventListener("click", () => {
  window.location.href = "./../Register/index.html";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.login__username.value;
  const password = form.login__password.value;
  const role = form.role.value;

  console.log(`${username} ${password}`);
  if (authentication(username, password)) {
    alert("correct");
  } else {
    alert("wrong");
  }
});

const authentication = (username, password) => {
  if (username === "admin" && password === "1234") {
    return true;
  }
  return false;
};
