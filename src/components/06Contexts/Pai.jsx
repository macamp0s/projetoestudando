import Filho from "./Filho"
import Contexto from "./MeuContexto"
//modo legado do context

const Pai = () => {
    return (
        <Contexto.Consumer>{
            ({cor})=>
            <div>
                <h2 style={{backgroundColor:cor}}>PAI</h2>
            </div>
        }</Contexto.Consumer>)

}

export default Pai