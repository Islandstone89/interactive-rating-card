
/* Select the rating card */
let ratingCard = document.querySelector(".rating-card");

/* Select the rating card */
let confirmationCard = document.querySelector(".confirmation-card");

/* Select the form */
let form = document.querySelector(".form");

/* Select the radio buttons */

let ratingButtons = document.querySelectorAll(".rating-btn-wrapper");

/* Select the selection paragraph */
let selectionMessage = document.querySelector(".confirmation-card__selection");


let defaultScore = 0;


/* Add event listener on form*/
form.addEventListener("submit", confirmation);


ratingButtons.forEach((ratingBtn) => {
    ratingBtn.addEventListener("click", ratingBtnClicked)
})


/* Write function that gets triggered on form submission */
function confirmation (e) {
    e.preventDefault();

    ratingCard.classList.toggle("hide");
    confirmationCard.classList.toggle("hide");

    selectionMessage.textContent = `You have selected ${defaultScore} out of 5`;
}




function ratingBtnClicked (e) {

    if (e.target.classList.contains("rating-btn-wrapper")) {
        e.target.classList.toggle("active");

        defaultScore = e.dataset.value;
    } 
}
