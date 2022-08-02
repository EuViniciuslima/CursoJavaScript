function loading() {
    var dat = new Date()
    var year = dat.getFullYear()
    var fyear = document.getElementById('noteyear')  
    var res = document.querySelector('div#res')

    if (fyear.value.length == 0 || Number(fyear.value) >= year) {  // LEITURA COMPARAÇÃO SE O ANO DIGITADO ESTÁ CORRETO
        window.alert(`[ERROR] Verifique os dados e tente novamente`)
    } else {                                 
        var fsex = document.getElementsByName('radsex')        //CALCULO DE IDADE
        var age = year - Number(fyear.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {      //VERIFICAÇÃO DA CAIXA DE PREENCHIMENTO MARCADA NO HTML
            genero = 'Men'
            if (age >= 0 && age <= 10){
                // CRIANÇA
                img.setAttribute('src', './imagem/Criança.png')
            } else if (age <= 17) {
                // ADOLESCENTE
                img.setAttribute('src', 'Adolescente.png')
            } else if (age <= 55 ) {
                // ADULTO
                img.setAttribute('src', 'Jovem.png')
            } else if (age <= 110) {
                //IDOSO
                img.setAttribute('src', 'Idoso.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Female'
            if (age >= 0 && age <= 10){
                // CRIANÇA
            } else if (age <= 17) {
                // ADOLESCENTE
            } else if (age <= 55 ) {
                // ADULTO
            } else if (age <= 110) {
                //IDOSO
            }

        }
        res.innerHTML = `We detected a ${age} year-old ${genero}`
        res.appendChild(img)  // É o que adiciona a imagem na tela
    }
}

            
        