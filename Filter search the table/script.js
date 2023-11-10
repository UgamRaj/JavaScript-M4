const tableData = [
  {
    name: "Maxwell Futterkiste",
    country: "Australia",
  },
  {
    name: "Drumil",
    country: "India",
  },
  {
    name: "Alfreds Futterkiste",
    country: "Germany",
  },
  {
    name: "Berglunds snabbkop",
    country: "Sweden",
  },
  {
    name: "Island Trading",
    country: "UK",
  },
  {
    name: "Koniglich Essen",
    country: "Germany",
  },
  {
    name: "John",
    country: "India",
  },
  {
    name: "Rasked",
    country: "Australia",
  },
];

const tBody = document.getElementById("tBody");

const populateTableData = (dataSet, isHighlighted = false, searchKey) => {
  tBody.innerHTML = "";

  dataSet.forEach((data) => {
    // tBody.innerHTML += `<tr>
    //     <td>${data.name}</td>
    //     <td>${data.country}</td>
    //     </tr>`;

    const tdName = document.createElement("td");
    tdName.innerHTML = data.name;

    if (isHighlighted) {
      const regex = new RegExp(searchKey, "gi");
      let text = tdName.innerText;
      text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
      const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
      tdName.innerHTML = newText;
    }

    const tdCountry = document.createElement("td");
    tdCountry.innerHTML = data.country;

    if (isHighlighted) {
      const regex = new RegExp(searchKey, "gi");
      let text = tdCountry.innerText;
      text = text.replace(/(<mark class="highlight">|<\/mark>)/gim, "");
      const newText = text.replace(regex, '<mark class="highlight">$&</mark>');
      tdCountry.innerHTML = newText;
    }
    const tr = document.createElement("tr");
    tr.append(tdName, tdCountry);
    tBody.append(tr);
  });
};
populateTableData(tableData);

const searchBox = document.getElementById("search-bar");
searchBox.addEventListener("keyup", (e) => {
  const userInput = e.target.value.toLowerCase();
  const filteredTableData = tableData.filter(
    (item) =>
      item.name.toLowerCase().includes(userInput) ||
      item.country.toLowerCase().includes(userInput)
  );

  const isHighlighted = true;
  populateTableData(filteredTableData, isHighlighted, userInput);
});
