const profileCard = document.getElementById("profileCard");

const update = async () => {
  let data = await (await fetch("./../../model/data.json")).json();
  data.forEach((card) => {
    profileCard.innerHTML += ` <div class="slot">
        <p class="slot__name">${card.name}</p>
        <button class="slot__button">Join Now</button>
      </div>`;
  });
};
update();
