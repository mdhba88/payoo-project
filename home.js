document.getElementById("addMoneyBtn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");

  //   main balance
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  //   fixed pin
  const fixedPin = 1234;

  //   sub items for main add money section
  const bankSelection = document.getElementById("bankSelection").value;
  const bankNumber = document.getElementById("bankNumber").value;
  const addAmount = parseInt(document.getElementById("addAmount").value);
  const addPin = parseInt(document.getElementById("addPin").value);

  //   condition for bank account number, tips: When the number has to be 11, it cannot be more or less than that used !== this condition
  if (bankNumber.length < 11) {
    alert("Please provide valid account number");
    return;
  }

  //   condition for pin number
  if (addPin !== fixedPin) {
    alert("please write you valid pin!");
    return;
  }

  //   new balance calculation and put it to main balance
  const totalNewAvailableBalance = availableBalance + addAmount;
  document.getElementById("availableBalance").innerText =
    totalNewAvailableBalance;

  //   console.log(bankSelection, bankNumber, addAmount, addPin, availableBalance);
});
