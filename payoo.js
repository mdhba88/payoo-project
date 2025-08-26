// transaction history showing array
const transactionData = [];

// by default add money is hidden---------->
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

// card focus styling
document.getElementById("addMoneyCard").addEventListener("click", function () {
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
    .getElementById("addMoneyCard")
    .classList.remove("border-[#0808081a]");

  document
    .getElementById("addMoneyCard")
    .classList.add(
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );

  // add money transaction history showing start
  const transactionValue = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(transactionValue);

  document
    .getElementById("addMoneySection")
    .addEventListener("click", function () {
      const transactionShowing = document.getElementById("transactionShowing");
      transactionShowing.innerHTML = "";

      for (const newData of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex flex-col gap-4">
          <div
            class="bg-white flex items-center justify-between p-4 rounded-xl"
          >
            <div class="flex items-center justify-center gap-4">
              <div class="bg-[#0808080d] p-3 rounded-full">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-[#080808b3]">
                  ${newData.name}
                </h3>
                <span class="text-xs text-[#080808b3]">${newData.date}</span>
              </div>
            </div>
            <div>
              <button class="text-[#080808b3]">
                <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
              </button>
            </div>
          </div>
        </div>
      `;
        transactionShowing.appendChild(div);
      }
    });
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

// by default cash out section is hidden---------->
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

// card focus styling
document.getElementById("cashOutCard").addEventListener("click", function () {
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
  document.getElementById("cashOutCard").classList.remove("border-[#0808081a]");

  document
    .getElementById("cashOutCard")
    .classList.add(
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );

  // cash out transaction history showing start
  const transactionValue = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(transactionValue);

  document
    .getElementById("cashOutSection")
    .addEventListener("click", function () {
      const transactionShowing = document.getElementById("transactionShowing");
      transactionShowing.innerHTML = "";

      for (const newData of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="flex flex-col gap-4">
          <div
            class="bg-white flex items-center justify-between p-4 rounded-xl"
          >
            <div class="flex items-center justify-center gap-4">
              <div class="bg-[#0808080d] p-3 rounded-full">
                <img src="assets/wallet1.png" alt="" />
              </div>
              <div>
                <h3 class="text-base font-semibold text-[#080808b3]">
                  ${newData.name}
                </h3>
                <span class="text-xs text-[#080808b3]">${newData.date}</span>
              </div>
            </div>
            <div>
              <button class="text-[#080808b3]">
                <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
              </button>
            </div>
          </div>
        </div>
      `;
        transactionShowing.appendChild(div);
      }
    });
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

// by default transfer money section is hidden---------->
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
    //   transfer money calculation
    const totalNewAvailableAmount = mainAvailableBalance - transferAmount;
    document.getElementById("availableBalance").innerText =
      totalNewAvailableAmount;
  } else if (userAccountNumber.length !== 11) {
    alert("Write your valid Number");
  } else if (transferPin.length !== 4) {
    alert("Write your valid 4Pin");
  } else {
    alert("Write your valid number and 4Pin");
  }
});

// card focus styling
document.getElementById("transferCard").addEventListener("click", function () {
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
    .getElementById("transferCard")
    .classList.remove("border-2", "border-[#0808081a]");

  document
    .getElementById("transferCard")
    .classList.add(
      "border-2",
      "border-[#0874F2]",
      "bg-[#F3F8FE]",
      "font-bold",
      "text-[#0874F2]"
    );
  card.classList.add("border-[#0808081a]");
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

// by default get bonus section is hidden---------->
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

// by default pay bill section is hidden---------->
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

// by default transaction section is hidden---------->
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
