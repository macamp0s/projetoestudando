//instalar axios: npm install axios
import axios from "axios"
import { useEffect, useState } from "react"

const PokemonAxios=()=>{

    const[id, setId]=useState(61)
    const [nome, setNome] =useState("")
    const [imagem, setImagem] =useState("")

    useEffect(
        ()=>{
            //usar crase pra alterar a string da url pro id q eu quero
            axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            //promessa deu certo then vai exercutar uma funcao callback que retorna o objeto response - o pokemo
            .then(
                (response)=>{
                    console.log(response.data.name)
                    setNome(response.data.name)
                    setImagem(response.data.sprites.front_default)
                    
                }
            )
            //deu errado
            .catch(
                (error)=>console.log(error)
            )

        },
        //dexa vazio de inicio, mas pra informar q ta mudando o id no botao ele recebe id
        [id]
    )
    return(
        <>
        <h3>nome: {nome}</h3>
        <img src={imagem} style={{width:"400"}}/>


        <button
         onClick={
            ()=>{
                setId((prev)=>prev-1)
            }
        }>      last pokemo
        </button>


        <button
         onClick={
            ()=>{
                setId((prev)=>prev+1)
            }
        }>

            next pokemo
        </button>



    

      
      
        </>
    )
}

export default PokemonAxios