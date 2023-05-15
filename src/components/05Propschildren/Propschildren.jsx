

const Mercado=({children, nome})=>{

    return(
        <div>
        <h2>nome do mercado é: {nome}</h2>
        <h2>{children}</h2>
        </div>
       
    )
}

export default Mercado