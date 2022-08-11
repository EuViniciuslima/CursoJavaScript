let vet = [];
let num = document.querySelector("input#num");
let botao = document.querySelector("input#botao");
let lista = document.querySelector("select#lista");
let res = document.querySelector("res");

function adicionarNum(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function verifiLista(n, l) {
  if (l.indexOf(Number(n) != -1)) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (adicionarNum(num.value) && !verifiLista(num.value, vet)) {
    window.alert("tudo Ok");
  } else {
    window.alert("Tente novamente");
  }
}

/*function adicionar() {
  if (num >= 1 && num <= 100) {
    if (vet.indexOf(num) != num) {
      vet.push(num);
      lista.innerHTML += `O número ${num} adicionado.`;
    } else if (num == 0) {
      window.alert("Por favor, digite um número!");
    } else {
      window.alert("Este número ja existe");
    }
  }
}

function finalizador() {
  for (let cont = 0; cont <= vet; cont++) {
    res.innerHTML += `Foi adicionado ${vet} números.`;
  }
}

function somar() {}*/
