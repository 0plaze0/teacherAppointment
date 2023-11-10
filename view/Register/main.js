const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = form.login__username.value;
  const password = form.login__password.value;
  const role = form.role.value;

  send(username, password, role);
  window.location.replace("./../Login/index.html");
});

const send = (username, password, role) => {
  console.log(`${username} ${password} ${role}`);
};
