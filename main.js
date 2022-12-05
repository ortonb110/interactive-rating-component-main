const rateCard = document.querySelector("main .rate-card"),
  appreciateCard = document.querySelector("main .appreciate-card"),
  btnSubmit = document.getElementById("btn");
const selected = document.querySelector(".selected");
let rate;
let isRated = false;
let rateList = document.querySelector("#theRates");

const appendRate = (e) => {
  if (e.target !== e.currentTarget) {
    rate = e.target.textContent;
    isRated = true;
    e.target.classList.add("btn-active");
  }
  e.stopPropagation();
};

rateList.addEventListener("click", appendRate);

const submit = () => {
  if (isRated == true) {
    rateCard.style.display = "none";
    appreciateCard.style.display = "block";
    selected.textContent = rate;
  }
};

btnSubmit.addEventListener("click", submit);
