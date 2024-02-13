
let noClicks = 0;
const maxClicks = 5; // Set the maximum number of clicks
const buttonTexts = ["No", "Are you sure?", "Really sure?", "Pwetty please", "If you say no, I'll be very sed","I'll be very sed"]; // Array of button texts

document.getElementById('No').addEventListener('click', function() {
    if (noClicks < maxClicks) {
        noClicks++;
        let textIndex = noClicks - 1; // Calculate the index of the text in the array
        let buttonText = buttonTexts[textIndex]; // Get the text based on the index
        let scaleFactor = 1 + (0.5 * noClicks); // Calculate the scale factor
        let fontSizeFactor = 12 + (2 * noClicks); // Calculate the font size factor
        let marginFactor = 50 + (5 * noClicks); // Calculate the margin factor
        let yesButton = document.getElementById('Yes');
        let noButton = document.getElementById('No');
        let newText = getNextButtonText(noButton.textContent); // Get the next text for the "No" button
        yesButton.style.transform = `scale(${scaleFactor})`; // Set the scale
        yesButton.style.fontSize = `${fontSizeFactor}px`; // Set the font size
        yesButton.style.margin = `0 ${marginFactor}px`; // Set the margin
        noButton.innerHTML = buttonText; // Change the text of the "Yes" button
        noButton.textContent = newText; // Set the new text
        resizeButtonWidth(noButton); // Resize the button width based on the text length
    }
});

function getNextButtonText(currentText) {
  // Array of different texts for the "No" button
  const buttonTexts = ["No", "Are you sure?", "Really sure?", "Pwetty please", "If you say no, I'll be very sed","I'll be very sed"];
  // Find the index of the current text
  let currentIndex = buttonTexts.indexOf(currentText);
  // If current text is not found or is the last element, start from the beginning
  if (currentIndex === -1 || currentIndex === buttonTexts.length - 1) {
      return buttonTexts[0];
  } else {
      return buttonTexts[currentIndex + 1]; // Return the next text
  }
}

function resizeButtonWidth(button) {
  let textLength = button.textContent.length; // Get the length of the text
  let fontSize = parseInt(window.getComputedStyle(button).fontSize); // Get the font size
  let newWidth = textLength * (fontSize * 0.6); // Calculate the new width based on text length and font size
  button.style.width = `${newWidth}px`; // Set the new width
}

document.getElementById("Yes").addEventListener("click", function() {
  window.location.href = "newpage.html"; // Replace "newpage.html" with the URL of the page you want to navigate to
});