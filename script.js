
/* Select the rating card */
let ratingCard = document.querySelector(".rating-card");

/* Select the rating card */
let confirmationCard = document.querySelector(".confirmation-card");

/* Write function that gets triggered on form submission */
function confirmation(e) {
    e.preventDefault()
    ratingCard.classList.toggle("hide");
    confirmationCard.classList.toggle("hide");
    /* selectionMessage.textContent = `You selected ${} out of ${}`; */
}

/* Select the form */
let form = document.querySelector(".form");

form.addEventListener("submit", confirmation);

/* Select the radio buttons */

let radioButtons = document.querySelectorAll(".rating-test");



function getValue(e) {
    let value = e.target.value;
}

/* Select the selection paragraph */
let selectionMessage = document.querySelector(".confirmation-card__selection");