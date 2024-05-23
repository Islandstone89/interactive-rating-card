
/* Select the rating card */
let ratingCard = document.querySelector(".rating-card");

/* Select the confirmation card */
let confirmationCard = document.querySelector(".confirmation-card");

/* Select the form */
let form = document.querySelector(".form");

/* Select the radio buttons */

let ratingButtons = document.querySelectorAll(".rating-btn");

/* Select the selection paragraph */
let selectionMessage = document.querySelector(".confirmation-card__selection");

/* Set default score */
let defaultScore = 0;


/* Write function that gets triggered on form submission */
function confirmation(e) {
    e.preventDefault();

    ratingCard.classList.toggle("hide");
    confirmationCard.classList.toggle("hide");

    selectionMessage.textContent = `You have selected ${defaultScore} out of 5`;
}

/* Add event listener on form*/
form.addEventListener("submit", confirmation);


  /* Create function that toggles active class and changed default score */
/*   function ratingBtnClicked(e) {

    if (e.target.classList.contains("active")) {
        ratingButtons.forEach((button) => button.classList.remove("active"));  
    } else {
        ratingButtons.forEach((button) => button.classList.remove("active"));
        this.classList.toggle("active");
    }

    defaultScore = e.target.dataset.value;
} */


/* Updated function that gets the value from the input */
function ratingBtnClicked() {
    ratingButtons.forEach((button) => button.parentElement.classList.remove("active"));
    this.parentElement.classList.add("active");

    defaultScore = this.value;
}


/* Loop through each of the buttons and add Event Listener */
ratingButtons.forEach((ratingBtn) => {
    ratingBtn.addEventListener("click", ratingBtnClicked)
})


