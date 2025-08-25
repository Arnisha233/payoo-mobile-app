// logout task
document.getElementById("logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});

let validPin = 1234;
const transactionData = [];

// function for prasInt and value the number or amount

function number(id) {
  const inputField = document.getElementById(id).value;
  // const inputFieldValue = inputField.value;
  const inputParse = parseInt(inputField);
  return inputParse;
}
// function for prasInt and innerText the number or amount
function numberTwo(id) {
  let mainBalance = document.getElementById(id).innerText;
  // let inner = mainBalance.innerText;
  let mainParse = parseInt(mainBalance);
  return mainParse;
}

// function to get InnerText
function getInnerText(value) {
  const element = document.getElementById("main-balance");
  element.innerText = value;
}

// function to toggle

function handleToggle(id) {
  const cashOut = document.getElementsByClassName("forms");
  for (let item of cashOut) {
    item.classList.add("hidden");
  }
  document.getElementById(id).classList.remove("hidden");
}

// function to toggle button active

function handleToggleBtn(id) {
  const formBtn = document.getElementsByClassName("form-btn");
  for (const btn of formBtn) {
    btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  }
  document
    .getElementById(id)
    .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
}

// add money calculate task

document.getElementById("add-money").addEventListener("click", function () {
  const bankAmount = document.getElementById("amount").value;
  const addAmount = number("add");
  const pinNumber = number("add-pin");
  if (bankAmount.length < 11) {
    alert("provid valid number");
    return;
  }

  if (pinNumber !== validPin) {
    alert("invalid pin");
    return;
  }

  let mainBalance = numberTwo("main-balance");
  let total = mainBalance + addAmount;
  // document.getElementById("main-balance").innerText = total;
  getInnerText(total);

  const data = {
    name: "Add Money",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

// cash out calculate task
let validPinTwo = 1234;
document.getElementById("withdraw").addEventListener("click", function () {
  const agentNumber = document.getElementById("agent").value;
  if (agentNumber.length < 11) {
    alert("provide valid number");
    return;
  }
  const cash = number("cash-amount");

  const cashPin = number("cash-pin");
  if (cashPin !== validPin) {
    alert("invalid pin");
    return;
  }
  let updateMain = numberTwo("main-balance");
  let totalCal = updateMain - cash;
  // document.getElementById("main-balance").innerText = totalCal;
  getInnerText(totalCal);
  const data = {
    name: "Cash Out",
    date: new Date().toLocaleTimeString(),
  };
  transactionData.push(data);
});

document.getElementById("transaction").addEventListener("click", function () {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText = "";
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="max-w-lg mx-auto flex justify-between items-center bg-[#FFFFFF] rounded-3xl gap-4 mt-4">
                <div class="p-6 flex gap-2">
                    <div>
                        <div class="border-2 p-3 rounded-full">
                            <img src="./assets/wallet1.png" alt="">
                        </div>
                    </div>
                    <div>
                        <h4>${data.name}</h4>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical px-6"></i>
            </div>
    `;
    transactionContainer.appendChild(div);
  }
});

// toggle button for chage button

// cash out button
document.getElementById("cash-out").addEventListener("click", function () {
  // document.getElementById("add-money-section").classList.add("hidden");
  // document.getElementById("cash-out-section").classList.remove("hidden");
  // document.getElementById("transfer-money-section").classList.add("hidden");
  // document.getElementById("get-bonus-section").classList.add("hidden");
  // document.getElementById("pay-bill-section").classList.add("hidden");
  // const cashOut = document.getElementsByClassName("forms");
  // for (let item of cashOut) {
  //   item.classList.add("hidden");
  // }
  // document.getElementById("cash-out-section").classList.remove("hidden");
  handleToggle("cash-out-section");

  // const formBtn = document.getElementsByClassName("form-btn");
  // for (const btn of formBtn) {
  //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  // }
  // document
  //   .getElementById("cash-out")
  //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
  handleToggleBtn("cash-out");
});

// add money button
document.getElementById("add-money-btn").addEventListener("click", function () {
  // document.getElementById("add-money-section").classList.remove("hidden");
  // document.getElementById("cash-out-section").classList.add("hidden");
  // document.getElementById("transfer-money-section").classList.add("hidden");
  // document.getElementById("get-bonus-section").classList.add("hidden");
  // document.getElementById("pay-bill-section").classList.add("hidden");
  // let addMoney = document.getElementsByClassName("froms");
  // for (let item of addMoney) {
  //   item.classList.add("hidden");
  // }
  // document.getElementById("add-money-section").classList.remove("hidden");
  // document.getElementById("cash-out-section").classList.add("hidden");
  handleToggle("add-money-section");

  // const formBtn = document.getElementsByClassName("form-btn");
  // for (const btn of formBtn) {
  //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  // }
  // document
  //   .getElementById("add-money-btn")
  //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
  handleToggleBtn("add-money-btn");
});

// transfer money

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    // document.getElementById("add-money-section").classList.add("hidden");
    // document
    //   .getElementById("transfer-money-section")
    //   .classList.remove("hidden");
    // document.getElementById("cash-out-section").classList.add("hidden");
    // document.getElementById("get-bonus-section").classList.add("hidden");
    // document.getElementById("pay-bill-section").classList.add("hidden");
    handleToggle("transfer-money-section");
    // const formBtn = document.getElementsByClassName("form-btn");
    // for (const btn of formBtn) {
    //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
    // }
    // document
    //   .getElementById("transfer-money")
    //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
    handleToggleBtn("transfer-money");
  });

//   get bonous

document.getElementById("bonus").addEventListener("click", function () {
  // document.getElementById("add-money-section").classList.add("hidden");
  // document.getElementById("get-bonus-section").classList.remove("hidden");
  // document.getElementById("cash-out-section").classList.add("hidden");
  // document.getElementById("transfer-money-section").classList.add("hidden");
  // document.getElementById("pay-bill-section").classList.add("hidden");
  handleToggle("get-bonus-section");
  // const formBtn = document.getElementsByClassName("form-btn");
  // for (const btn of formBtn) {
  //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  // }
  // document
  //   .getElementById("bonus")
  //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
  handleToggleBtn("bonus");
});

// pay bill
document.getElementById("pay-bill").addEventListener("click", function () {
  // document.getElementById("pay-bill-section").classList.remove("hidden");
  // document.getElementById("add-money-section").classList.add("hidden");
  // document.getElementById("cash-out-section").classList.add("hidden");
  // document.getElementById("transfer-money-section").classList.add("hidden");
  // document.getElementById("get-bonus-section").classList.add("hidden");
  handleToggle("pay-bill-section");
  // const formBtn = document.getElementsByClassName("form-btn");
  // for (const btn of formBtn) {
  //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  // }
  // document
  //   .getElementById("pay-bill")
  //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
  handleToggleBtn("pay-bill");
});

// transaction

document.getElementById("transaction").addEventListener("click", function () {
  handleToggle("transaction-section");
  // const formBtn = document.getElementsByClassName("form-btn");
  // for (const btn of formBtn) {
  //   btn.classList.remove("border-[#0874F2]", "bg-[#0874f20d]");
  // }
  // document
  //   .getElementById("transaction")
  //   .classList.add("border-[#0874F2]", "bg-[#0874f20d]");
  handleToggleBtn("transaction");
});
