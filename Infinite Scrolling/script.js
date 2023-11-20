const imageBox = document.getElementById("imageBox");
const imagesContainer = document.getElementById("imagesContainer");
const loader = document.getElementById("loader");

// console.log(loader);

let ready = false;
const count = 10;
let imagesLoaded = 0;
// const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const API_KEY = "Dm0sSUv1MLMaNgwwALWtO_CA5RpiXtka6JmcPJEB5Io";
const URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=${count}&page=1`;

// const URL = `https://api.unsplash.com/search/photos?query=${searchKey}&client_id=${API_KEY}&page=${currPage}`;
const getImages = async () => {
  try {
    loader.style.display = "block";
    const response = await fetch(URL);
    const imagesArray = await response.json();
    displayImages(imagesArray);
  } catch (err) {
    console.log(err);
  }
};

const onImageLoaded = () => {
  imagesLoaded++;
  if (count === imagesLoaded) {
    // All the images have loaded
    ready = true; // Ready to load more images
    loader.style.display = "none";
    // console.log("READY IS BEING SET TO TRUE");
  }
  // console.log("Img finished loading");
};

const displayImages = (imagesArray) => {
  imagesArray.forEach((imageObject) => {
    const imageBox = document.createElement("div");
    imageBox.classList.add("imageBox");
    const img = document.createElement("img");
    img.src = imageObject.urls.regular;
    img.alt = "Random Image";
    // onload
    img.addEventListener("load", onImageLoaded);
    imageBox.appendChild(img);
    imagesContainer.appendChild(imageBox);
  });
};

getImages();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight &&
    ready === true
  ) {
    ready = false;
    imagesLoaded = 0;
    getImages();
    // console.log("Reached bottom");
  }
});

//! light dark mode

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
