import Pai from "./Pai"
import Filho from "./Filho"
import Contexto from "./MeuContexto";

const cor = "blue";

const Avo = () => {
    return (
        <Contexto.Provider value={{ cor: cor, cor2:"green"}}>

            <div>
                <h2 style={{ backgroundColor: cor }}>AVO</h2>
                <Pai></Pai>
                <Filho></Filho>
            </div>

        </Contexto.Provider>
    )

}

export default Avo