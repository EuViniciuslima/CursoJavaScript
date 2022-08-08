function loading() {
  let numI = document.getElementById("numI");
  let numII = document.getElementById("numII");
  let numP = document.getElementById("numP");
  let resp = document.getElementById("resp");

  if (
    numI.value.length == 0 ||
    numII.value.length == 0 ||
    numP.value.length == 0
  ) {
    window.alert(`[ERROR] Faltam dados!`);
  } else {
    resp.innerHTML = `Contando: `;
    let i = Number(numI.value);
    let f = Number(numII.value);
    let p = Number(numP.value);

    for (let c = i; c <= f; c += p) {
      resp.innerHTML += `${c} `;
    }
  }
}
