const profileCard = document.getElementById("profileCard");

const update = async () => {
  let data = await (await fetch("./../../model/data.json")).json();
  data.forEach((card) => {
    profileCard.innerHTML += ` <div class="profile">
<div class="profile-image">
  <img src="./../../assests/profilePic.jpg" alt="Krishna" />
</div>
<p class="profile-name">${card.name}</p>
<p class="profile-description">${card.description}</p>
<button class="profile-button">Book Now</button>
</div>`;
  });
};
update();
