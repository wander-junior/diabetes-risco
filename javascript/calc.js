const beggin = document.querySelector("#iniciar")
let testField = document.querySelector("#teste")
let result = 0

// Funções para facilitar a criação das perguntas (criaTitulo, criaBtn, criaSelect)

function criaTitulo(titulo){
    testField.innerHTML = ""
    let questionTitle = document.createElement("h2")
    questionTitle.innerHTML = titulo
    testField.appendChild(questionTitle)
}

function criaBtn(funcao) {
    let nextBtn = document.createElement("button")
    nextBtn.innerHTML = "Próximo"
    nextBtn.setAttribute('onclick', funcao)
    testField.appendChild(nextBtn)
}

function criaSelect(option1, option2, value1=option1, value2=option2) {
    let selectField = document.createElement("select")
    testField.appendChild(selectField)

    let select1 = document.createElement("option")
    select1.setAttribute("value", value1)
    let select1Value = document.createTextNode(option1)
    select1.appendChild(select1Value)
    document.querySelector("select").appendChild(select1)

    let select2 = document.createElement("option")
    select2.setAttribute("value", value2)
    let select2Value = document.createTextNode(option2)
    select2.appendChild(select2Value)
    document.querySelector("select").appendChild(select2)
}

function criaInput(type) {
    let input = document.createElement("input")
    input.type = type
    testField.appendChild(input)
}

// Começa o teste pela pergunta da idade
beggin.onclick = function() {
    criaTitulo("Idade")
    criaInput("number")
    age = document.querySelector("input")
    criaBtn("calcIdade()")
}

function calcIdade() {
    thisAge = (this.age.value)
    if (thisAge <= 0) {
        alert("Digite uma idade válida")
    }
    else if (thisAge < 45) {
        perguntaSexo()
    } else if (thisAge < 55) {
        result += 2
        perguntaSexo()
    } else if (thisAge < 65) {
        result += 3
        perguntaSexo()
    } else if (thisAge >= 65) {
        result += 4
        perguntaSexo()
    }
}

function perguntaSexo() {
    criaTitulo("Sexo")

    criaSelect("Masculino", "Feminino")

    criaBtn("perguntaCintura()")
    sexo = document.querySelector('select')
}

function perguntaCintura() {
    criaTitulo("Medida da cintura(em cm)")
    criaInput("number")
    waist = document.querySelector("input")
    criaBtn("calcCintura()")
}

function calcCintura() {
    waist = this.waist.value
    if(this.sexo.value == 'Masculino'){
        if (waist <= 0) {
            alert("Digite uma medida válida")
        }
        else if (waist < 94) {
            perguntaPeso()
        } else if (waist < 102) {
            result += 3
            perguntaPeso()
        } else {
            result += 4
            perguntaPeso()
        }
    } else {
        if (waist <= 0) {
            alert("Digite uma medida válida")
        }
        else if (waist < 80) {
            perguntaPeso()
        } else if (waist < 88) {
            result += 3
            perguntaPeso()
        } else {
            result += 4
            perguntaPeso()
        }
    }
}

function perguntaPeso() {
    criaTitulo("Peso")
    criaInput("number")
    peso = document.querySelector("input")
    criaBtn("validaPeso()")
}

function validaPeso() {
    if (peso.value <= 0) {
        alert("Digite um peso válido")
    }
    else {
        perguntaAltura()
    }
}

function perguntaAltura() {
    criaTitulo("Altura (em cm)")
    criaInput("number")
    altura = document.querySelector("input")
    criaBtn("calculaImc()")
}

function calculaImc() {
    quadradoDaAltura = Math.pow((altura.value/100), 2)
    const imc = peso.value / quadradoDaAltura
    if (imc > 25) {
        perguntaAtvFisica()
    } else if (imc > 30) {
        result += 1
        perguntaAtvFisica()
    } else {
        result += 3
        perguntaAtvFisica()
    }
}

function perguntaAtvFisica() {
    criaTitulo("Pratica, diariamente, atividade física pelo menos durante 30 minutos, no trabalho ou durante o tempo livre (incluindo atividades da vida diária)?")
    criaSelect("Sim", "Não", "sim", "nao")
    criaBtn("perguntaDieta()")
    atvFisica = document.querySelector('select')
}

function perguntaDieta() {
    //Faz pontuação da pergunta anterior
    if(atvFisica.value == 'nao') {
        result += 2
    }
    criaTitulo("Com que regularidade come vegetais e/ou fruta (sopa, salada, legumes cozidos, entre outros)?")
    criaSelect("Sim", "Não", "sim", "nao")
    criaBtn("perguntaMedicamentos()")
    dieta = document.querySelector('select')
}

function perguntaMedicamentos() {
    //Faz pontuação da pergunta anterior
    if(dieta.value == 'nao') {
        result += 1
    }
    criaTitulo("Toma regularmente ou já tomou alguns medicamentos para a Hipertensão Arterial?")
    criaSelect("Sim", "Não", "sim", "nao")
    criaBtn()
    medicacao = document.querySelector('select')
}