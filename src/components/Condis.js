import { useState } from "react";

function Condis(){

    const [email,setEmail] = useState();
    const [useEmail, setUseEmail] = useState();

    function enviarEmail(e){
        e.preventDefault()
        setUseEmail(email)
        console.log(useEmail)
    }
    function limparEmail(){
        setUseEmail('')
    }

    
    return(
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email.."onChange={(e) => setEmail(e.target.value)} />
                <button type="submit "onClick={enviarEmail}>Enviar email </button>
                {useEmail && (
                    <div>
                        <p>O email do usuario e: {useEmail}</p>
                        <button onClick={limparEmail}>Limpar email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condis;