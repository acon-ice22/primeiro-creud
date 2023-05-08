"use strict";
let produtos = [
    { nome: "imagem preta e branca", valor: " cada folha: 1.00" },
    { nome: "imagem colorida", valor: "cada folha: 1.5" },
    { nome: "papel adesivo", valor: "cada folha: 2.00" },
    { nome: "polaroid", valor: "1.0 cada" }
];
console.log(produtos);
console.log(produtos[1]);
function listarProdutos() {
}
function salvarpro(nome, valor) {
    let produtoObj = { nome, valor
    };
    produtos.push(produtoObj);
}
function editapro(nomeField, nome, valor) {
    let key = produtos.findIndex(p => p.nome === nomeField);
    let produtoedit = { nome, valor };
    produtos[key] = produtoedit;
}
function apagarpro(nome) {
    let key = produtos.findIndex(p => p.nome === nome);
    produtos.splice(key, 1);
}
