// by default this section is hidden
document.getElementById("cashOutSection").style.display = "none";

// start with cash out section button
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // main available balance
  const mainAvailableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  // sub items for cash out section
  const agentNumber = document.getElementById("agentNumber").value;
  const cashOutAmount = parseInt(
    document.getElementById("cashOutAmount").value
  );
  const cashOutPin = document.getElementById("cashOutPin").value;

  // comparison in number and four pin for matching. when is matching then the value is return
  if (agentNumber.length === 11 && cashOutPin.length === 4) {
    // cash out calculation
    const totalNewAvailableAmount = mainAvailableBalance - cashOutAmount;
    document.getElementById("availableBalance").innerText =
      totalNewAvailableAmount;
  } else if (agentNumber.length !== 11) {
    alert("Write your valid Number");
  } else if (cashOutPin.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }
});

// cash out toggling
document.getElementById("cashOutCard").addEventListener("click", function () {
  document.getElementById("cashOutSection").style.display = "block";
  document.getElementById("addMoneySection").style.display = "none";
  document.getElementById("transferSection").style.display = "none";
  document.getElementById("getBonusSection").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
  document.getElementById("transactionSection").style.display = "none";
});
