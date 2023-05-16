const SaveData=()=>{
    const save=()=>{

//criando objeto aluno
        const aluno={nome:"Jefferson", curso:"SI"}
        localStorage.setItem("aluno01", JSON.stringify(aluno)) 

    }

    return(
        <div>
           <h3>Salvando dados...</h3>
           {save()}
           < LoadData></ LoadData>
        </div>
    )

}

const LoadData=()=>{
    const load=()=>{
 //get string // objetificar a string q ta recebeno - usa o json.parse

        const alunocarregado=JSON.parse(localStorage.getItem("aluno01"))

        return(<>
        <h3> carregando dados...</h3>
            <h3>nome: {alunocarregado.nome}</h3>
            <h3>curso: {alunocarregado.curso}</h3></>
        )

    }

    return(
        <>
        {load()}
        </>
    )
    
}

export default SaveData