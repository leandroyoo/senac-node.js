var readlineSync = require ('readline-sync');

var Nomes = []
var checkin =[]
var quartos=[]
var funcionarios =[]
var dependencias =[]
var alimentacao = []
var resp  = 0
do {
    console.log("-------------------SEJA BEM VINDO---------------------------")
    var Nome = readlineSync.question('Qual o seu nome: ');
   
    checkin = readlineSync.question('informe a nota do checkin: ');
   
    quartos = readlineSync.question('informe a nota do quartos: ');
  
    funcionarios = readlineSync.question('informe a nota dos funcionarios ');
  
    dependencias = readlineSync.question('informe a nota das dependencias: ');

    alimentacao = readlineSync.question('informe a nota da alimentacao: ');
    


    console.log("-------------------OBRIGADO PELA SUA AVALIAÇÃO---------------------------")
    Nomes[i] = Nome;

    checkin[i] = checkin;

    quartos[i] = quartos

    funcionarios[i] = funcionarios

    alimentacao[i] = alimentacao

    resp = readlineSync.question('quer continuar? ');
   
}  while (resp == 's' )





for(var i = 0 ; i < 1; i++){
    console.log(Nomes[i]);
    console.log(checkin[i]);
    console.log(quartos[i]);
    console.log(funcionarios[i]);
    console.log(dependencias[i]);
    console.log(alimentacao[i]);
}


