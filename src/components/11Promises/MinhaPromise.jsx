//Traduzindo para o português, “Hooks” significa ganchos. Esses hooks foram introduzidos no React a partir da versão 16.8 da biblioteca, sendo recursos que permitem que você gerencie o estado, ciclos de vida do componente e outros recursos do React sem precisar escrever componentes em forma de classes. 
//Os Hooks nos ajudam a organizar a lógica que será usada em um componente. Podemos até criar nossos próprios Hooks para reutilizar a lógica em vários componentes. 


import { useEffect } from "react"

const MinhaPromise= new Promise(

    (resolve, reject)=>{
        console.log("iniciando a logica")
        setTimeout(
            ()=>{
                console.log("logica terminada")
                const meuInt=Math.floor ((Math.random()*10))+1
                console.log(meuInt)
                if(meuInt%2===0) resolve("Deu tudo certo")
                else reject({numero:meuInt, msg:"deu errado" })
            }
            ,
            3000
        )
    }


)

const MeuGet=(url)=>{
//url de mentirinha so pra dize q fez algo com
    return MinhaPromise
}

const Promessa = ()=>{
        useEffect(
            ()=>{
                MeuGet("http://faaaa")
                .then((response)=>console.log(response))
                .catch((error)=>console.log(error, error.numero))

            }
            ,
            []
        )

        return(
            <h1>testando minha promise</h1>
        )
}


export default Promessa