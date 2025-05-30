// grab the user input of numbers and place them into bank
// when user clicks Sort 1, the number in bank needs to go in 
  // even or odd depending on iof number is even or odd

// Grab the user form
const userInput = document.querySelector(`form`);
// add the submit event listener to the form
userInput.addEventListener(`submit`, (event) => {
  // Stope the refresh
  event.preventDefault();
  // grab the usder input
  const userNumbers = document.querySelector("#user-numbers").value;
});
console.log(`userInput`);
  