// by default this section is hidden
document.getElementById("cashOutSection").style.display = "none";

// start with cash out section button
document.getElementById("cashOutBtn").addEventListener("click", function (e) {
  e.preventDefault();
  // main available balance
  const mainAvailableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  //   fixed pin
  const fixedPin = 1234;

  //   sub items for add money section
  const agentNumber = document.getElementById("agentNumber").value;
  const cashOutAmount = parseInt(
    document.getElementById("cashOutAmount").value
  );
  const cashOutPin = parseInt(document.getElementById("cashOutPin").value);

  //   condition for bank account number, tips: When the number has to be 11, it cannot be more or less than that used !== this condition
  if (bankNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }

  //   condition for pin number
  if (cashOutPin !== fixedPin) {
    alert("please write you valid pin!");
    return;
  }

  //   cash out calculation
  const totalNewAvailableAmount = mainAvailableBalance - cashOutAmount;
  document.getElementById("availableBalance").innerText =
    totalNewAvailableAmount;
});

// cash out toggling
document.getElementById("cashOutCard").addEventListener("click", function () {
  document.getElementById("cashOutSection").style.display = "block";
  document.getElementById("addMoneySection").style.display = "none";
});
