const phoneContainer = document.getElementById("phone-container");
const showDetailSection = document.getElementById("showDetail-section");
showDetailSection.style.display = "none";

const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("searchBtn");
const loading = document.getElementById("loading");
const showALLBtn = document.getElementById("showALLBtn");

let tempPhone = [];
const showAll = (totalPhone) => {
  tempPhone = totalPhone;
};

const diplayPhones = (totalPhone, isShowAllPhone = false) => {
  phoneContainer.innerHTML = "";
  //!-------------------Write code here

  if (totalPhone.length < 12) {
    showALLBtn.style.display = "none";
  } else {
    showALLBtn.style.display = "flex";
  }
  if (!isShowAllPhone) {
    totalPhone = totalPhone.slice(0, 12);
  }
  if (isShowAllPhone) {
    showALLBtn.style.display = "none";
  }

  totalPhone.forEach((item) => {
    phoneContainer.innerHTML += `  <div class="phone-card">
    <div class="image">
      <img
        src="${item.image}"
        alt="phone"
      />
    </div>
    <h3>${item.phone_name}</h3>
    <p>
      There are many variations of passages of available, but the
      majority have suffered
    </p>
    <button id='showDetailss' onclick="showPhoneDetails('${item.slug}')" class="btn">SHOW DETAILS</button>
  </div>`;
  });
};

showALLBtn.addEventListener("click", () => {
  const isShowAllPhone = true;
  diplayPhones(tempPhone, isShowAllPhone);
  // searchPhoneOnClick()
});

const searchPhoneOnClick = async (searchKey) => {
  const phoneData = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchKey}`
  );
  loading.style.display = "flex";
  const response = await phoneData.json();
  const totalPhone = response.data;
  loading.style.display = "none";
  diplayPhones(totalPhone);
  showAll(totalPhone);
};

searchBtn.addEventListener("click", () => {
  const searchKey = searchBar.value;
  searchPhoneOnClick(searchKey);
  if (!searchKey) {
    initialDisplayPhone();
  }
});

const initialDisplayPhone = async () => {
  const card = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=13"
  );
  loading.style.display = "flex";
  const response = await card.json();
  //   console.log(response.data);
  const totalPhone = response.data;
  loading.style.display = "none";
  diplayPhones(totalPhone);
};
initialDisplayPhone();

//!-----------------
// close button function
const closeCard = () => {
  showDetailSection.style.display = "none";
};
//!-----------------
// show detail card
const showPhoneDetails = async (nameId) => {
  //   console.log(nameId);
  const card = await fetch(
    `https://openapi.programming-hero.com/api/phone/${nameId}`
  );
  const response = await card.json();

  let features = response.data;
  //   console.log(features);
  showDetailSection.style.display = "flex";
  const modelDiv = document.getElementById("model-Div");
  const dialog = document.getElementById("dialog");
  // const dialog = document.createElement("div");
  // dialog.classList.add("dialog");
  dialog.innerText = "";
  // modelDiv.innerText = "";
  // showDetailSection.innerText = "";

  let phoneDetails = ` <div id="modelImage" class="">
<img src="${features.image}" alt="Phone" /> </div>
<h3 id="model" class="">${features.name}</h3>
<h3 id="brand" class="">Brand: ${features.brand}</h3>`;
  dialog.innerHTML += phoneDetails;

  let specific = "";
  for (let key in features.mainFeatures) {
    // console.log(key);
    specific += `<p>${key}: ${features.mainFeatures[key]}</p>`;
  }

  dialog.innerHTML += specific;

  let strDet = ` <p id="releaseDate" class="">${features.releaseDate}</p>
<div class="">
  <button class="btn red" onclick='closeCard()'>Close</button>
</div>`;
  // dialog.append(phoneDetails, specific, strDet);
  // const modelDiv = document.createElement("div");
  // modelDiv.classList.add("show-Detail-container");
  // modelDiv.append(dialog);
  // console.log(modelDiv);

  dialog.innerHTML += strDet;
  modelDiv.append(dialog);
  // modelDiv.innerHTML += dialog;
  console.log(modelDiv);

  // showDetailSection.innerHTML += modelDiv;
  showDetailSection.append(modelDiv);

  // modelDiv.style.backgroundColor = "white";
};
// showPhoneDetails("apple_iphone_13_pro_max-11089");

//!------------

// Object.entries(features.mainFeatures).forEach((item) => {
//   specific += `<p>${item[0]}: ${item[1]}</p>`;
//   console.log(item[0], item[0]);
// });
// console.log(specific);
