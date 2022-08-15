let vet = [];
let num = document.querySelector("input#num");
let botao = document.querySelector("input#botao");
let lista = document.querySelector("select#lista");
let res = document.querySelector("div#res");

function adicionarNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function verifiLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (adicionarNum(num.value) && !verifiLista(num.value, vet)) {
    vet.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Valor ${num.value} adicionado`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista");
  }
  num.value = "";
  num.focus(); // O input de número no site passa a coletar automaticamente sem precisar selecionar.
}

function finalizador() {
  if (vet.length == 0) {
    window.alert("Adicione alguns números a sua lista!");
  } else {
    let total = vet.length;
    let maior = vet[0];
    let menor = vet[0];
    for (let pos in vet) {
      if (vet[pos] > maior) {
        maior = vet[pos];
      } else if (vet[pos] < menor) {
        menor = vet[pos];
      }
    }
    res.innerHTML += `No total temos ${total} números cadastrados`;
    res.innerHTMl += `O maior número informado é ${maior}`;
    res.innerHTML += `O menor número informado é ${menor}`;
  }
}
