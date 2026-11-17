// Atividade 2: prompt, conversão e desconto
const nomeProduto = "Teclado";
let preco = 100;
let quantidade = 100;
const desconto = 0.1;

preco = preco * (1 - desconto);
console.log(`Novo preço de ${nomeProduto}: ${preco}`);

let textoQtd = prompt(`Temos ${quantidade} unidades. Quantas você quer?`);
let qtdCompra = parseInt(textoQtd);

let total = qtdCompra * preco;
quantidade = quantidade - qtdCompra;

console.log(`Estoque atualizado: ${quantidade}`);
alert(`Total da compra: ${total}`);
