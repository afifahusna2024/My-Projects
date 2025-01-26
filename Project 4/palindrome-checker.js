document.getElementById("check-btn").addEventListener("click", function () {
  const inputField = document.getElementById("text-input");
  const input = inputField.value.trim(); // Trim whitespace

  // Check if the input is empty
  if (!input) {
    alert("Please input a value");
    return;
  }

  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = normalizedStr.split("").reverse().join(""); // Reverse the normalized string

  const resultElement = document.getElementById("result");
  if (normalizedStr === reversedStr) {
    resultElement.textContent = `${input} is a palindrome.`;
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = `${input} is not a palindrome.`;
    resultElement.style.color = "red";
  }
});
