const searchBtn = document.getElementById("searchBtn");
const searchField = document.getElementById("searchField");
const cards = document.getElementById("cards");
const showMoreBtn = document.getElementById("showMoreBtn");

let currPage = 1;

showMoreBtn.style.display = "none";

const displayImages = (images) => {
  //   cards.innerHTML = "";
  images.forEach((image) => {
    cards.innerHTML += ` <div class="card">
<div class="image">
  <img
    src="${image.urls.regular}"
    alt="image"
  />
</div>
<div class="text">
<a href="${image.urls.full}">${image.alt_description}</a>
</div>
</div>`;
  });

  currPage++;
  showMoreBtn.style.display = "none";

  if (images.length >= 10) {
    showMoreBtn.style.display = "block";
  }
};

const getDataFromApi = async (searchKey) => {
  const API_KEY = "Dm0sSUv1MLMaNgwwALWtO_CA5RpiXtka6JmcPJEB5Io";

  const URL = `https://api.unsplash.com/search/photos?query=${searchKey}&client_id=${API_KEY}&page=${currPage}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data.results);
    displayImages(data.results);
  } catch (error) {
    console.log(error);
  }
};

const searchHandler = () => {
  //   console.log(searchField.value);
  const searchKey = searchField.value;
  const result = getDataFromApi(searchKey);
};

searchBtn.addEventListener("click", searchHandler);

showMoreBtn.addEventListener("click", searchHandler);
