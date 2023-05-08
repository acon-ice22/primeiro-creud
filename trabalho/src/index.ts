interface impressão{
    nome:string;
    valor:string;
    }
  
    let produtos: Array<impressão> = [
    {nome:"imagem preta e branca", valor: " cada folha: 1.00"}, 
    {nome:"imagem colorida", valor: "cada folha: 1.5"},
    {nome:"papel adesivo", valor: "cada folha: 2.00"},
    {nome:"polaroid", valor:"1.0 cada" }
     ];
    console.log(produtos);
    console. log (produtos 
    [1]);
    
    function listarProdutos(){ 
    }
    
    function salvarpro ( nome:string, valor:string){
    let produtoObj: impressão= {nome, valor
    }
    produtos.push(produtoObj);
}
    function editapro ( nomeField: string, nome:string, valor:string){
    let key=produtos.findIndex(p=>p.nome===nomeField);
    let produtoedit:impressão= {nome, valor}
    produtos [key]=produtoedit;
    }
    
    function apagarpro ( nome: string){
    let key=produtos.findIndex(p=>p.nome===nome);
    produtos.splice(key,1);
    
    }