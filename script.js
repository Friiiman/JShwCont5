import { dataArr } from "./data.js";

const data = JSON.parse(dataArr);
console.log(data);

const containerEl = document.createElement("div");
containerEl.classList.add("container");
document.body.append(containerEl);

containerEl.style.display = "flex";
containerEl.style.flexWrap = "wrap";
containerEl.style.flexDirection = "row";
containerEl.style.gap = "30px";
containerEl.style.width = "900px";
containerEl.style.margin = "0 auto";

data.forEach(({ id, email, firstName, lastName, avatar }) => {
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");
  containerEl.appendChild(cardEl);
  cardEl.style.display = "flex";
  cardEl.style.flexWrap = "wrap";
  cardEl.style.flexDirection = "column";
  cardEl.style.width = "200px";
  cardEl.style.border = "1px solid black";
  cardEl.setAttribute("id", id);

  const cardImg = document.createElement("img");
  cardImg.classList.add("card__img");
  cardImg.src = avatar;
  cardEl.appendChild(cardImg);
  cardImg.style.width = "100%";
  cardImg.style.marginBottom = "10px";

  const cardText = document.createElement("div");
  cardText.classList.add("card__text");
  cardEl.appendChild(cardText);
  cardText.style.display = "flex";
  cardText.style.flexDirection = "column";
  cardText.style.gap = "10px";
  cardText.style.padding = "10px";

  const cardName = document.createElement("p");
  cardName.classList.add("card__name");
  cardName.textContent = `${firstName} ${lastName}`;
  cardText.appendChild(cardName);
  cardName.style.margin = "0";

  const cardMail = document.createElement("p");
  cardMail.classList.add("card__mail");
  cardMail.textContent = email;
  cardText.appendChild(cardMail);
  cardMail.style.margin = "0";
});
