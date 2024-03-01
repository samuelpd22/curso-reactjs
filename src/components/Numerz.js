import { useState } from "react";

function Numerz(props){
    
    const [num,setNum] = useState(1);
    
    return(
        <div>
            <p>Valor do state num:{props.num}</p>
            <button onClick={() => props.setNum(props.num + 1)}> AUMENTAR VALOR </button>
        </div>
    )
}
export default Numerz;