const beggin = document.querySelector("#iniciar")
let testField = document.querySelector("#teste")
let result = 0
let weight = 0
let height = 0

// Começa o teste pela pergunta da idade
beggin.onclick = function() {
    perguntaIdade()
}

function perguntaIdade() {
    criaTitulo("Idade")
    let ageField = document.createElement("input")
    ageField.type = "number"
    testField.appendChild(ageField)
    ageField.id = "age"
    age = document.querySelector("#age")
    criaBtn("calcIdade()")
}

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

function perguntaCintura() {
    criaTitulo("Medida da cintura(em cm)")

    let waistField = document.createElement("input")
    waistField.setAttribute("type", "number")
    testField.appendChild(waistField)
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
    let weightField = document.createElement("input")
    weightField.type = "number"
    testField.appendChild(weightField)
    weightField.id = "weight"
    peso = document.querySelector("#weight")
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
    let heightField = document.createElement("input")
    heightField.type = "number"
    testField.appendChild(heightField)
    heightField.id = "height"
    altura = document.querySelector("#height")
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
    criaBtn()
    atvFisica = document.querySelector('select')
}