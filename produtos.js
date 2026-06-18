const produtos = {
    nome: "The Legend of Zelda: Majora's Mask",
    preco: 200 , 
    dono: "Nintendo"} 

    for(let chave in produtos){
        console.log(`${chave}: ${produtos[chave]}`);
    }
    console.log(Object.keys(produtos));