const ratingButtons = document.querySelectorAll(".circle");
const confirmButton = document.querySelector(".btnSubmit");
const rateContentHolder = document.querySelector(".rateContentHolder");
const thankMessage = document.querySelector(".thankMessage");
const summaryMessage = document.querySelector(".summaryMsg");


let rate = 0;

ratingButtons.forEach(function (element) {
    element.onclick = function () {

        let selected = document.querySelector(".selected");

        if(selected){
            selected.classList.remove("selected");
        }

        rate = element.innerText;
        element.classList.add("selected");
    }
});


confirmButton.onclick = function () {
    if (rate !== 0){

        summaryMessage.innerText = "You selected " + rate + " out of 5";
        rateContentHolder.classList.add("displayNone");
        thankMessage.classList.remove("displayNone");
    }
}
