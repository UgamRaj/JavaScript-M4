const jokeBox = document.getElementById("jokeBox");
const result = document.getElementById("result");
const loader = document.getElementById("loader");

(function () {
  async function getJoke() {
    const API_KEY = "grEMjBELuzkK0ZmrAcvyjg==7psEgI5xQZfP0bSK";
    let options = {
      method: "GET",
      headers: { "X-Api-Key": API_KEY },
    };
    const URL = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;
    result.style.display = "none";
    loader.style.display = "block";

    try {
      const response = await fetch(URL, options);
      const data = await response.json();
      result.style.display = "block";
      loader.style.display = "none";
      jokeBox.innerText = data[0].joke;
      // console.log(data);
    } catch (error) {
      // console.log(error.message);
      result.style.display = "block";
      loader.style.display = "none";
      jokeBox.style.color = "red";
      jokeBox.innerHTML = error.message;
    }
  }

  document.getElementById("btn").addEventListener("click", getJoke);
})();
