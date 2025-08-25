// by default this section is hidden
document.getElementById("transactionSection").style.display = "block";

// transactions toggling
document
  .getElementById("transactionCard")
  .addEventListener("click", function () {
    document.getElementById("transactionSection").style.display = "block";
    document.getElementById("addMoneySection").style.display = "none";
    document.getElementById("cashOutSection").style.display = "none";
    document.getElementById("transferSection").style.display = "none";
    document.getElementById("getBonusSection").style.display = "none";
    document.getElementById("payBillSection").style.display = "none";
  });
