var readlineSync = require('readline-sync');

var userName = readlineSync.question('qual seu nome? ');
console.log('oi ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('qual sua idade ');
console.log('ola, ' + userName + ' sua idade é: ' + favFood + '!');

