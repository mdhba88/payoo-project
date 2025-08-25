// by default this section is hidden
document.getElementById("transferSection").style.display = "none";

// start with transfer money section button
document.getElementById("transferBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // main available balance
  const mainAvailableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  // sub items for transfer money section
  const userAccountNumber = document.getElementById("userAccountNumber").value;
  const transferAmount = parseInt(
    document.getElementById("transferAmount").value
  );
  const transferPin = document.getElementById("transferPin").value;

  // comparison in number and four pin for matching. when is matching then the value is return
  if (userAccountNumber.length === 11 && transferPin.length === 4) {
    window.location.href = "home.html";
  } else if (userAccountNumber.length !== 11) {
    alert("Write your valid Number");
  } else if (transferPin.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }

  //   transfer money calculation
  const totalNewAvailableAmount = mainAvailableBalance - transferAmount;
  document.getElementById("availableBalance").innerText =
    totalNewAvailableAmount;
});

// transfer money toggling
document.getElementById("transferCard").addEventListener("click", function () {
  document.getElementById("transferSection").style.display = "block";
  document.getElementById("addMoneySection").style.display = "none";
  document.getElementById("cashOutSection").style.display = "none";
  document.getElementById("getBonusSection").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
  document.getElementById("transactionSection").style.display = "none";
});
