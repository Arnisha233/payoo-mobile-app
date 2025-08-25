document.getElementById("btn").addEventListener("click", function () {
  let coun = document.getElementById("count").innerText;
  let cont = parseInt(coun);
  cont = cont + 1;
  document.getElementById("count").innerText = cont;
});

document.getElementById("btnTwo").addEventListener("click", function () {
  let coun = document.getElementById("count").innerText;
  let cont = parseInt(coun);
  if (cont > 0) {
    cont = cont - 1;
    document.getElementById("count").innerText = cont;
    return;
  } else {
    alert("invalid");
  }
});
