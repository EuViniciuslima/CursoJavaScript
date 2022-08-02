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
        var img = document.createElement('img') // CRIAR DINAMICAMENTE IMAGENS CHAMADAS PELAS CONDIÇÕES DA FUNÇÃO
        img.setAttribute('id', 'foto') // CRIANDO UM ID

        if (fsex[0].checked) {      //VERIFICAÇÃO DA CAIXA DE PREENCHIMENTO MARCADA NO HTML
            genero = 'Men'
            if (age >= 0 && age <= 10){
                // CRIANÇA
                img.setAttribute('src', './imagem/Criança.png')
            } else if (age > 11 && age <= 17) {
                // ADOLESCENTE
                img.setAttribute('src', './imagem/Adolescente_homem.png')
            } else if (age >= 18 && age <= 55 ) {
                // ADULTO
                img.setAttribute('src', './imagem/MeiaIdade.png')
            } else if (age >= 56 && age <= 110) {
                //IDOSO
                img.setAttribute('src', './imagem/Idoso.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Female'
            if (age >= 0 && age <= 10){
                // CRIANÇA
                img.setAttribute('src', './imagem/Criança_menina.png')
            } else if (age >= 11 && age <= 17) {
                // ADOLESCENTE
                img.setAttribute('src', './imagem/Adolescente.png')
            } else if (age >= 18 && age <= 55 ) {
                // ADULTO
                img.setAttribute('src', './imagem/Jovem.png')
            } else if (age >= 56 && age <= 110) {
                //IDOSO
                img.setAttribute('src', './imagem/Idosa.png')
            }

        }
        res.innerHTML = `We detected a ${age} year-old ${genero}`
        res.appendChild(img)  // É o que adiciona a imagem na tela
    }
}

            
        