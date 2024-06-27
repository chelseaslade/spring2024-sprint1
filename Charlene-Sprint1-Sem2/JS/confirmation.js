const generatedNumbers = new Set();

function generateUnique10DigitNumber() {
  let number;
  do {
    number = Math.floor(1000000000 + Math.random() * 9000000000);
  } while (generatedNumbers.has(number));
  
  generatedNumbers.add(number);
  return number;
}

function displayConfirmationNumber() {
  const confirmationNumber = generateUnique10DigitNumber();
  document.getElementById("confirmation-number").textContent = confirmationNumber;
}

window.onload = function() {
  displayConfirmationNumber();
};
