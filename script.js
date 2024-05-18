
/* Select the rating card */
let ratingCard = document.querySelector(".rating-card");

/* Select the rating card */
let confirmationCard = document.querySelector(".confirmation-card");

/* Write function that gets triggered on form submission */
function confirmation(e) {
    e.preventDefault()
    ratingCard.classList.toggle("hide");
    confirmationCard.classList.toggle("show");
}

/* Select the form */
let form = document.querySelector(".form");

form.addEventListener("submit", confirmation);