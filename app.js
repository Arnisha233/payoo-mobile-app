// login account

document.getElementById("login-btn").addEventListener("click", function () {
  const phone = 1765621002;
  const pinNumbeer = 1234;

  const mobileNumber = parseInt(document.getElementById("mobile").value);
  const pin = parseInt(document.getElementById("pin").value);

  if (phone == mobileNumber && pinNumbeer == pin) {
    window.location.href = "./home.html";
  } else {
    alert("invalid");
  }
});
