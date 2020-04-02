/* Aula 01
var nome = "Philipe Melo";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo."
// alert("Nome: " + nome + " Idade: " + idade + " anos.");
//alert(idade+idade2);

// Imprimir variáveis no console do navegador
console.log(nome);
console.log(idade+idade2);

// Substituir pedeço de string no console
// console.log(frase.replace("Japão","Brasil"));

// Substituir pedeço de string no alert
// alert(frase.replace("Japão","Brasil"));

Tornar todas as palavras da string maiúsculas
alert(frase.toLocaleUpperCase());
console.log(frase.toLocaleUpperCase());


// Tornar todas as palavras da string minúsculas
alert(frase.toLocaleLowerCase());
console.log(frase.toLocaleLowerCase());
*/

/* Aula 02 - Array*/

var lista = ["maçã", "pêra", "laranja"];
/* imprimir a lsita inteira
console.log(lista);
*/

/* imprimir apenas um elemento da lista
console.log(lista[1])
alert(lista[1]);
*/

/*
// incluir novo item na lista
lista.push("uva");
lista.push("banana")
// remover o último item da lista
lista.pop();
*/

/* Ver o tamanho da lista
console.log(lista.length);
*/

/* Imprimir a lista ao contrário
console.log(lista.reverse());
*/

/* tornar array em string
console.log(lista.toString());
*/

/* imprimir a lista e em seguida transformar ela em string, listando o primeiro elemento da string
console.log(lista);
console.log(lista.toString()[0]);
*/

/* alterar o separador da string de , para -
console.log(lista);
console.log(lista.toString());
console.log(lista.join("-"));
*/

// aula 02 - Dicionário

/*
var fruta = {nome: "maçã", cor: "vermelho"}
//imprime todo o dicionário
console.log(fruta);
//imprime somente o atributo cor
alert(fruta.cor);
*/
/*
// criar um array de dicionário
var frutas = [{nome: "maçã", cor: "vermelho"},{nome:"uva", cor:"roxa"}]
//imprime todo o dicionário
console.log(frutas);
//imprime somente o atributo cor
alert(frutas[1].cor);
*/

// AULA 03 - Condicionais, laços de repetição e Date
/*
var idade = 18;
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
//entrada de dados pelo navegador
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}
*/

/*
// estrutura de repetição while
var count =0;
while(count<=5){
    console.log(count);
    count++;
};
*/

/*
// estrutura de repetição for
var count;
for(count = 0; count <=5; count++){
    alert(count);
}
*/

/*
// trabalhando com datas
var d = new Date();
alert(d);
alert(d.getDate());
alert(d.getDay());
alert(d.getHours());
alert(d.getMonth());
*/









