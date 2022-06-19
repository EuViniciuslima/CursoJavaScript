/* Esta função faz aparecer a hora atual juntamente com imagens que representam em qual horário do dia você está */

function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`

  // Fazendo as condições dos respectivos horários do dia.

  if (hora >= 0 && hora <= 12) {
    // Será dia
    img.src = './img/dia.png'
    document.body.style.background = '#89B7C7' // Alterando a cor do background pela hora do dia.
  } else if (hora >= 12 && hora <= 18) {
    // Será tarde
    img.src = './img/tarde.png'
    document.body.style.background = '#FCC67A' // Segue a mesma linha que a 15.
  } else {
    // Será noite
    img.src = './img/noite.png'
    document.body.style.background = '#0C1221' // Segue a mesma linha que a 15.
  }
}
