// logout task
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

// add money task

document.getElementById("add-money").addEventListener("click", function () {
  const bankSelect = document.getElementById("bank").value;
  const bankAmount = document.getElementById("amount").value;
  const bankAmountPars = parseInt(bankAmount);
  const addAmount = parseInt(document.getElementById("add").value);
  const pinNumber = parseInt(document.getElementById("add-pin").value);
  if (bankAmount.length < 11) {
    alert("provid valid number");
    return;
  }

  let mainBalance = parseInt(document.getElementById("main-balance").innerText);
  let total = mainBalance + addAmount;
  document.getElementById("main-balance").innerText = total;
});

// toggle button for chage button

// cash out button
document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.remove("hidden");
  document.getElementById("transfer-money-section").classList.add("hidden");
  document.getElementById("get-bonus-section").classList.add("hidden");
  document.getElementById("pay-bill-section").classList.add("hidden");
});

// add money button
document.getElementById("add-money-btn").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.remove("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transfer-money-section").classList.add("hidden");
  document.getElementById("get-bonus-section").classList.add("hidden");
  document.getElementById("pay-bill-section").classList.add("hidden");
});

// transfer money

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-section").classList.add("hidden");
    document
      .getElementById("transfer-money-section")
      .classList.remove("hidden");
    document.getElementById("cash-out-section").classList.add("hidden");
    document.getElementById("get-bonus-section").classList.add("hidden");
    document.getElementById("pay-bill-section").classList.add("hidden");
  });

//   get bonous

document.getElementById("bonus").addEventListener("click", function () {
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("get-bonus-section").classList.remove("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transfer-money-section").classList.add("hidden");
  document.getElementById("pay-bill-section").classList.add("hidden");
});

// pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  document.getElementById("pay-bill-section").classList.remove("hidden");
  document.getElementById("add-money-section").classList.add("hidden");
  document.getElementById("cash-out-section").classList.add("hidden");
  document.getElementById("transfer-money-section").classList.add("hidden");
  document.getElementById("get-bonus-section").classList.add("hidden");
});
