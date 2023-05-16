import Filho from "./Filho"

const Pai2=()=>{

    const mensagem=(msgfilho)=>{
        return(
        alert("Meu filho disse: " +msgfilho))
    }

    return(
        <>
    <div style={{backgroundColor:"gray"}}>Pai</div>
    <Filho falarpai={mensagem}></Filho></>)
}

export default Pai2