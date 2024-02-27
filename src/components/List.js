import Item
 from "./Item";
function List(){
    return(
        <>
        
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrarri"lancamento={2004}/>
                <Item marca="Fiat" lancamento={2013}/>
            </ul>
    
        </>
    )
}
export default List;