const form = document.querySelector(".form");
const nameInput = document.querySelector(".carName");
const ageInput = document.querySelector(".carSpeed");
const cityInput = document.querySelector(".carPrice");
const imgUrlInput = document.querySelector(".carImgUrl");
const colorInput = document.querySelector(".carColor");
const result = document.getElementById("carList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const speed = ageInput.value;
  const city = cityInput.value;
  const imgUrl = imgUrlInput.value;
  const color = colorInput.value;

  const nameLi = document.createElement("li");
  nameLi.textContent = `Car name: ${name}`;

  const ageLi = document.createElement("li");
  ageLi.textContent = `Speed: ${speed}`;

  const cityLi = document.createElement("li");
  cityLi.textContent = `Price: ${city}`;

  const imgLi = document.createElement("img");
  imgLi.classList.add("img-item")
  imgLi.setAttribute("src", imgUrl);
  imgLi.setAttribute("alt", name);
  imgLi.style.width = "200px";
  imgLi.style.height = "150px";

  const colorLi = document.createElement("div");
  colorLi.classList.add("liclass")
  colorLi.textContent = `Color: `;
  colorLi.style.backgroundColor = color;
  colorLi.style.width = "200px";
  colorLi.style.height = "30px";

  const list = document.createElement("ul");
  list.classList.add("carInfo");

  list.appendChild(imgLi);
  list.appendChild(nameLi);
  list.appendChild(ageLi);
  list.appendChild(cityLi);
  list.appendChild(colorLi);

  result.appendChild(list);

  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  imgUrlInput.value = "https://avatars.mds.yandex.net/i?id=8f54182029091a94870fccc8529b0f1dc7b8e38c-10814230-images-thumbs&n=13";
});
