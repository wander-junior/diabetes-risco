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

    let genderField = document.createElement("select")
    genderField.setAttribute("id", "sexo");
    testField.appendChild(genderField)

    let masc = document.createElement("option");
    masc.setAttribute("value", "masculino");
    let mascValue = document.createTextNode("Masculino");
    masc.appendChild(mascValue);
    document.querySelector("#sexo").appendChild(masc); 

    let fem = document.createElement("option");
    fem.setAttribute("value", "feminino");
    let femValue = document.createTextNode("Feminino");
    fem.appendChild(femValue);
    document.querySelector("#sexo").appendChild(fem);

    criaBtn("calcSexo()")
    sexo = document.querySelector('select')
}

function calcSexo() {
    perguntaCintura()
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
    if(this.sexo.value == 'masculino'){
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

}