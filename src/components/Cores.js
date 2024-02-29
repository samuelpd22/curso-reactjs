import { useState } from "react";

function Cores(){
    const {cor,setCor} = useState(1);

    const vermelho={color: '#f00'}
    const verde={color: '#0f0'}
    const azul={color: '#00f'}


    const mudaCor=()=>{
        setCor(cor+1)
        if(cor > 2){
            setCor(1)
        }
    }

    const retCor=(c) =>{
        if(c === 1){
            return vermelho;
        } else if (c === 2){
            return verde;
        } else {
            return azul;
        }
    }

    return (
        <div>
            <h1 style={retCor(cor)}>Mudar cor</h1>
            <button onClick={()=> mudaCor()}>Mudar cor</button>
        </div>
    )
}
export default Cores;