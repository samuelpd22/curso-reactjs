import { useState } from "react"

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
    const [log,setLog]=useState(false);

        const msgLogin=()=>{
            return 'Usuario logado'
        }
        const logoff=()=>{
            return 'Favor logar!!'
        }

    return(
        <div>
           <p>{comprimentar()}</p> 
           <p>{log?msgLogin():logoff()}</p>
           <button onClick={()=> setLog(!log)}>{log?logoff:msgLogin}</button>

        </div>
    )
}
export default Comp;