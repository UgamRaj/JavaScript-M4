const getData = () => {
  userData = JSON.parse(localStorage.getItem("userData"));
  let count = 0;
  for (const key in userData) {
    if (!userData[key]) count++;

    document.getElementById(key).innerHTML = userData[key];
  }

  return Object.keys(userData).length === count;
};

(function () {
  if (localStorage.getItem("userData")) {
    // return getData();
    if (!getData()) return;
  }

  let userData = {
    firstName,
    lastName,
    country,
    phoneNumber,
    state,
    city,
    village,
  };

  for (const key in userData) {
    const value = prompt("give your " + key);
    userData[key] = value;
  }
  localStorage.setItem("userData", JSON.stringify(userData));

  getData();
})();

//! light dark mode

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
