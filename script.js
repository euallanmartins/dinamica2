let idade

idade = 13

if(idade > 18){
    console.log("Parabéns, você tem mais do que 18 anos!")
} else {
    console.log("eita, você não tem mais de 18 anos...")
}

idade = 22

if(idade > 18){
    console.log("Parabéns, você tem mais do que 18 anos!")
} else {
    console.log("eita, você não tem mais de 18 anos...")
}

let humano

idade = 13
humano = true

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

idade = 19
humano = false

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

idade = 24
humano = true

if(idade >= 18 && humano == true){
    console.log("Você é um humano maior de idade.")
} else {
    console.log("Você não é um humano maior de idade.")
}

let nome, mes

nome = "alberto"
mes = "fevereiro"

if(mes == "Janeiro" || mes == "Dezembro"){
    console.log(`${nome}, você faz aniversário em Dezembro ou Janeiro :)`)
} else {
    console.log(`${nome}, você não faz aniversário em Dezembro ou Janeiro :(`)
}

nome = "allan"
mes = "Dezembro"

if(mes == "Janeiro" || mes == "Dezembro"){
    console.log(`${nome}, você faz aniversário em Dezembro ou Janeiro :)`)
} else {
    console.log(`${nome}, você não faz aniversário em Dezembro ou Janeiro :(`)
}

let primeiraLetra

primeiraLetra = "J"

if(primeiraLetra == "R"){
    console.log("Seu nome começa com a letra R!!!")
} else {
    console.log(`Seu nome não começa com a letra R, ele começa com ${primeiraLetra}`)
}

primeiraLetra = "R"

if(primeiraLetra == "R"){
    console.log("Seu nome começa com a letra R!!!")
} else {
    console.log(`Seu nome não começa com a letra R, ele começa com ${primeiraLetra}`)
}

let numLetras
   
numLetras = 7
primeiraLetra = "E"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}

numLetras = 7
primeiraLetra = "V"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}

numLetras = 4
primeiraLetra = "S"

if(numLetras > 6 || primeiraLetra == "E"){
    console.log("Seu sobrenome tem mais de seis letras ou começa com a letra E :)")
} else {
    console.log("Seu sobrenome não tem mais de seis letras e nem começa com a letra E :(")
}