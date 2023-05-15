//modo atual context
import Contexto from "./MeuContexto"
import { useContext } from "react"

const Filho = () => {
    const {cor2} = useContext(Contexto)
    return (
        <div>
            <h2 style={{backgroundColor:cor2}}>FILHO</h2>
        </div>
    )
}

export default Filho