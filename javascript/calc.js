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
    age = document.querySelector("#age")
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
    console.log(result)
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
    criaBtn()
    sexo = document.querySelector('select')
    document.getElementsByTagName("button")[0].setAttribute("onclick", "getSexo()");
}

function getSexo() {
    if(this.sexo.value == 'masculino') {

    }
    else {
        
    }
}