function Comp(){
    const comprimentar=() => {

        //const hora = new Date().getHours
        const hora =10
        if(hora >=0 && hora < 13){
            return <p>Bom dia</p>
        } else if (hora >=13 && hora <=18){
            return <p>Boa tarde</p>
        } else {
            return <p>Boa noite</p>
        }
    }

    return(
        <div>
           <p>{comprimentar()}</p> 
        </div>
    )
}
export default Comp;