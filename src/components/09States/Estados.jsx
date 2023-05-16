import { useEffect, useState } from "react"

const FunctionEstados=()=>{
    //let contador =10;

    const [contador, setContador]=useState(10)

    const [efeito, setEfeito]=useState(true)

    useEffect(
        ()=>{
            if(contador%2===0) setEfeito(true)
            else setEfeito(false)
            {}
        },[contador]
    )

    const acaobotao=()=>{

        //contador++
        //console.log(contador)

        setContador(contador+1)
    }

    return(
        <>
        <h1>contador: {contador} </h1>
       
        <button
        onClick={acaobotao}>
            Aumentar contador 

        </button>
        <h1>é par? {''+efeito}</h1>
        </>
    )
}

export default FunctionEstados