let beggin = document.querySelector("#iniciar")
let testField = document.querySelector("#teste")
let result = 0

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
    age = document.getElementById("age")
    criaBtn()
    document.getElementsByTagName("button")[0].setAttribute("onclick", "calcIdade()");
}

function criaTitulo(titulo){
    testField.innerHTML = ""
    let questionTitle = document.createElement("h2")
    questionTitle.innerHTML = titulo
    testField.appendChild(questionTitle)
}

function criaBtn() {
    let nextBtn = document.createElement("button")
    nextBtn.innerHTML = "Próximo"
    testField.appendChild(nextBtn)
}

function calcIdade() {
    thisAge = (this.age.value)
    console.log(thisAge)
    if (thisAge <= 0) {
        alert("Digite uma idade válida")
    }
    else if (thisAge < 45) {
        // Passar para próxima pergunta
    } else if (thisAge < 55) {
        result += 2
        // Passar para próxima pergunta
    } else if (thisAge < 65) {
        result += 3
        // Passar para próxima pergunta
    } else if (thisAge >= 65) {
        result += 4
        // Passar para próxima pergunta
    }
    console.log(result)
}