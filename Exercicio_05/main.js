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
    let soma = 0;
    let media = 0;
    for (let pos in vet) {
      soma += vet[pos];
      media += vet[pos] / 2;
      if (vet[pos] > maior) {
        maior = vet[pos];
      }
      if (vet[pos] < menor) {
        menor = vet[pos];
      }
    }

    res.innerHTML += `<p>No total temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior número informado é ${maior}.</p>`;
    res.innerHTML += `<p>O menor número informado é ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os  números é ${soma}.</p>`;
    res.innerHTML += `<p>A média é${media}.</p>`;
  }
}
