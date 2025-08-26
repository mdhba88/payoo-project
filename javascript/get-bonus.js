// by default this section is hidden
document.getElementById("getBonusSection").style.display = "none";

// start with get bonus section button
document.getElementById("getBonusBtn").addEventListener("click", function (e) {
  e.preventDefault();

  // main available balance
  const mainAvailableBalance = parseInt(
    document.getElementById("availableBalance").innerText
  );

  // sub items for get bonus section
  const getBonusCoupon = document.getElementById("getBonusCoupon").value;

  // condition for bank account number, tips: When the number has to be 11, it cannot be more or less than that used !== this condition
  if (getBonusCoupon.length >= 0) {
    // coupon convert to the number
    const getBonusIntConvert = parseInt(getBonusCoupon);

    // get bonus calculation
    const totalNewAvailableAmount = mainAvailableBalance + getBonusIntConvert;
    document.getElementById("availableBalance").innerText =
      totalNewAvailableAmount;
  } else {
    alert("Please provide valid coupon number");
    return;
  }
});

// card focus styling
document.getElementById("getBonusCard").addEventListener("click", function () {
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
  document
    .getElementById("getBonusCard")
    .classList.remove("border-2", "border-[#0808081a]");

  document
    .getElementById("getBonusCard")
    .classList.add(
      "border-2",
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );
});

// get bonus toggling
document.getElementById("getBonusCard").addEventListener("click", function () {
  document.getElementById("getBonusSection").style.display = "block";
  document.getElementById("addMoneySection").style.display = "none";
  document.getElementById("cashOutSection").style.display = "none";
  document.getElementById("transferSection").style.display = "none";
  document.getElementById("payBillSection").style.display = "none";
  document.getElementById("transactionSection").style.display = "none";
});
