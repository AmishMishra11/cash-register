const billAmount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-give");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", function giveBillAmount() {
  console.log(cashGiven.value);
  console.log(billAmount.value);
  hideError();
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      const amountRetrun = cashGiven.value - billAmount;
      calculateChange(amountRetrun);
    } else {
      showError(
        "The cash provided should be greater than or equla to bill amount "
      );
    }
  } else {
    showError("The  bill amount should be greater then 0");
  }
});

function calculateChange(amountRetrun) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountRetrun / notes[i]);
    amountRetrun %= notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function hideError() {
  message.style.display = "none";
}

function showError(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
