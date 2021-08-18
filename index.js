const billAmount = document.querySelector("#bill-amt");
const nextButton = document.querySelector("#next");
const billMessage = document.querySelector("#bill-message");
const cashGiven = document.querySelector("#cash-give");
const checkButton = document.querySelector("#check-button");
const cashMessage = document.querySelector("#cash-message");
const cashTitle = document.querySelector(".title");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const table = document.querySelector("#table-id");

const notes = [2000, 500, 100, 20, 10, 5, 1];

nextButton.addEventListener("click", function takeCash() {
  hideError1();
  if (billAmount.value > 0) {
    showCash();
  } else {
    showError1("The  bill amount should be greater then 0");
  }
});

checkButton.addEventListener("click", function giveBillAmount() {
  hideError2();
  var cashValue = Number(cashGiven.value);
  var billValue = Number(billAmount.value);

  if (cashValue >= billValue) {
    const amountRetrun = cashValue - billValue;
    showTable();
    calculateChange(amountRetrun);
  } else {
    showError2(
      "The cash provided should be greater than or equla to bill amount "
    );
  }
});

function calculateChange(amountRetrun) {
  for (let i = 0; i < notes.length; i++) {
    const numberOfNotes = Math.trunc(amountRetrun / notes[i]);
    amountRetrun %= notes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

function showCash() {
  cashGiven.style.display = "block";
  checkButton.style.display = "block";
  cashTitle.style.display = "block";
}

function hideError1() {
  billMessage.style.display = "none";
}

function hideError2() {
  cashMessage.style.display = "none";
}

function showError1(msg) {
  billMessage.style.display = "block";
  billMessage.innerText = msg;
}

function showError2(msg) {
  cashMessage.style.display = "block";
  cashMessage.innerText = msg;
}

function showTable() {
  table.style.display = "block";
}
