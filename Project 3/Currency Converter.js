/*const BASE_URL =
  "https://v6.exchangerate-api.com/v6/c87b45bdb610e0ce9007cef8/latest/USD";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

// Just checking
/*for (let code in countryList) {
  console.log(code, countryList[code]);
}*/

/*const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  if (img) {
    img.src = newSrc;
  }
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  //console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}`;
  let response = await fetch(URL);
  console.log(response);
});*/

// new code

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/c87b45bdb610e0ce9007cef8/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }

    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}

const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  if (img) {
    img.src = newSrc;
  }
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }

  // Construct the API URL
  const URL = `${BASE_URL}/${fromCurr.value}`;
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates.");
    }
    const data = await response.json();

    // Check for conversion rates in the API response
    if (data.conversion_rates) {
      const rate = data.conversion_rates[toCurr.value];
      const result = amtVal * rate;
      document.querySelector(
        ".result"
      ).textContent = `Converted Amount: ${result.toFixed(2)}`;
    } else {
      alert("Conversion rate not available.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Something went wrong. Please try again.");
  }
});
