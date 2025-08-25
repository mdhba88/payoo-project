// by default this section is hidden
document.getElementById("addMoneySection").style.display = "none";

// add money section
document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // main available balance
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  // sub items for add money section
  const bankSelection = document.getElementById("bankSelection").value;
  const bankNumber = document.getElementById("bankNumber").value;
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const addPin = document.getElementById("addPin").value;

  // comparison in number and four pin for matching. when is matching then the value is return
  if (bankNumber.length === 11 && addPin.length === 4) {
    // new balance calculation and put it to main balance
    const totalNewAvailableBalance = availableBalance + addAmount;
    document.getElementById("availableBalance").innerText =
      totalNewAvailableBalance;
  } else if (bankNumber.length !== 11) {
    alert("Write your valid Number");
  } else if (addPin.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }
});

// add money toggling
document.getElementById("addMoneyCard").addEventListener("click", function () {
  document.getElementById("addMoneySection").style.display = "block";
  document.getElementById("cashOutSection").style.display = "none";
  document.getElementById("transferSection").style.display = "none";
  document.getElementById("getBonusSection").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
  document.getElementById("transactionSection").style.display = "none";
});
