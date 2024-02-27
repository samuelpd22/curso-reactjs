import Item
 from "./Item";
 import PropTypes from 'prop-types'
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
Item.prototype={
    marca:PropTypes.string.isRequired,
    lancamento:PropTypes.number
}
Item.defaultProps = { 
    marca:'Faltou a marca',
    lancamento:0
}
export default List;