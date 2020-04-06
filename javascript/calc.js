const beggin = document.querySelector("#iniciar")
let testField = document.querySelector("#teste")
let result = 0

// Funções para facilitar a criação das perguntas 
// (criaTitulo, criaBtn, criaSelect, criaInput, criaInputRadio, criaParagrafo)

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
    // Para criação de input com o type "radio", utilizar a função criaInputRadio()
    let input = document.createElement("input")
    input.type = type
    testField.appendChild(input)
}

function criaInputRadio(...args){
    args.forEach((texto, idx) => {
        let inputContainer = document.createElement("div")
        inputContainer.classList.add("inputContainer")

        let input = document.createElement("input")
        input.setAttribute("name", "inputRadio")
        input.setAttribute("id", idx.toString())
        input.setAttribute("type", "radio")
        inputContainer.appendChild(input)
        
        let label = document.createElement("label")
        label.setAttribute("for", idx.toString())
        label.innerText = texto
        inputContainer.appendChild(label)
        
        testField.appendChild(inputContainer)
    })
}

function criaParagrafo(texto) {
    let paragrafo = document.createElement("p")
    paragrafo.innerText = texto
    testField.appendChild(paragrafo)
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
    criaBtn("perguntaAcucar()")
    medicacao = document.querySelector('select')
}

function perguntaAcucar() {
    //Faz pontuação da pergunta anterior
    if(medicacao.value == 'sim') {
        result += 5
    }
    criaTitulo("Alguma vez teve açúcar elevado no sangue (ex.: num exame de saúde, durante um período de doença ou durante a gravidez)?")
    criaSelect("Sim", "Não", "sim", "nao")
    criaBtn("perguntaHistoricoFamiliar()")
    acucar = document.querySelector('select')
}

function perguntaHistoricoFamiliar() {
    criaTitulo("Tem algum membro de família próximo ou outros familiares a quem foi diagnosticado diabetes (Tipo 1 ou Tipo 2)?")
    criaInputRadio("Não", 
                   "Sim: pais, irmãos, irmãs ou filhos",
                   "Sim: avós, tias, tios ou primos em 1º grau (exceto pais, irmão, irmãs ou filhos)"
    )
    criaBtn('calcHistoricoFamiliar()')
    opcoes = document.querySelectorAll(".inputContainer input")
}

function calcHistoricoFamiliar() {
    let opcaoSelecionada
    opcoes.forEach((opcao) => {
        if (opcao.checked == true) {
            opcaoSelecionada = opcao
        }
    })
    if(opcaoSelecionada.id == 0) {
        result += 0
        calcResultado()
    } else if (opcaoSelecionada.id == 1) {
        result += 3
        calcResultado()
    } else if (opcaoSelecionada.id == 2) {
        result += 5
        calcResultado()
    }
}

function calcResultado() {
    if (result < 7) {
        criaTitulo("Nível de Risco Baixo")
        criaParagrafo("Calcula-se que 1 em 100 pessoas nesse nível de risco desenvolverá a doença (1%)")
    } else if (result < 12) {
        criaTitulo("Nível de Risco Ligeiro")
        criaParagrafo("Calcula-se que 1 em 25 pessoas desenvolverá a doença (4%)")
    } else if (result < 15) {
        criaTitulo("Nível de Risco Moderado")
        criaParagrafo("Calcula-se que 1 em 6 pessoas desenvolverá a doença (16,6%)")
    } else if (result < 21) {
        criaTitulo("Nível de Risco Alto")
        criaParagrafo("Calcula-se que 1 em 3 pessoas desenvolverá a doença (33,3%)")
    } else {
        criaTitulo("Nível de Risco Muito Alto")
        criaParagrafo("Calcula-se que 1 em 2 pessoas desenvolverá a doença (50%)")
    }
}