// by default this section is hidden
document.getElementById("payBillSection").style.display = "none";

// pay bill section
document.getElementById("payBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // main available balance
  const availableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  // sub items for pay bill section
  const payBankSelection = document.getElementById("payBankSelection").value;
  const payBankNumber = document.getElementById("payBankNumber").value;
  const payAmount = parseInt(document.getElementById("payAmount").value);
  const payPin = document.getElementById("payPin").value;

  // comparison in number and four pin for matching. when is matching then the value is return
  if (payBankNumber.length === 11 && payPin.length === 4) {
    // new balance calculation and put it to main balance
    const totalNewAvailableBalance = availableBalance - payAmount;
    document.getElementById("availableBalance").innerText =
      totalNewAvailableBalance;
  } else if (payBankNumber.length !== 11) {
    alert("Write your valid Number");
  } else if (payPin.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }
});

// card focus styling
document.getElementById("payBillCard").addEventListener("click", function () {
  const cardFocusStyle = document.getElementsByClassName("focusStyle");
  for (const card of cardFocusStyle) {
    card.classList.remove(
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );
    card.classList.add("border-[#0808081a]");
  }
  document.getElementById("payBillCard").classList.remove("border-[#0808081a]");

  document
    .getElementById("payBillCard")
    .classList.add(
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );
});

// pay bill toggling
document.getElementById("payBillCard").addEventListener("click", function () {
  document.getElementById("payBillSection").style.display = "block";
  document.getElementById("addMoneySection").style.display = "none";
  document.getElementById("cashOutSection").style.display = "none";
  document.getElementById("transferSection").style.display = "none";
  document.getElementById("getBonusSection").style.display = "none";
  document.getElementById("transactionSection").style.display = "none";
});
