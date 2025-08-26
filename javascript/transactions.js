// by default this section is hidden
document.getElementById("transactionSection").style.display = "block";

// card focus styling
document
  .getElementById("transactionCard")
  .addEventListener("click", function () {
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
      .getElementById("transactionCard")
      .classList.remove("border-[#0808081a]");

    document
      .getElementById("transactionCard")
      .classList.add(
        "border-[#0874F2]",
        "bg-[#F3F8FE]",
        "font-bold",
        "text-[#0874F2]"
      );
    card.classList.add("border-[#0808081a]");
  });

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
