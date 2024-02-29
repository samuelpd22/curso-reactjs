function OutraLista2(){

    const meusCarros = ['I30 2012', 'Civic Si 2007','Focus 2011'];
    const listaCarros = meusCarros.map((c) => 
    <li>{c}</li>
    )

    return(
        <div>
            <h1>Lista de carros: </h1>
            <ul>{listaCarros}</ul>
        </div>
    )
}
export default OutraLista2;