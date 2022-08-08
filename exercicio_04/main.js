function loading() {
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById("resposta");
  var tabuada = "";

  for (var cont = 1; cont < 10; cont++) {
    tabuada += num + " x " + cont + " = " + num * cont + "<br />";

    resposta.innerHTML = tabuada;
  }
}
