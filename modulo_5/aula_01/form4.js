var readlineSync = require ('readline-sync');

var Nomes = []

for(var i = 0; i < 5; i++){
    var Nome = readlineSync.question('informe o nome: ');
    Nomes[i] = Nome;
}

for(var i = 0 ; i < Nomes.length; i++){
    console.log(Nomes[i]);
}
