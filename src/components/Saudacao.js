function Saudacao({nome}){
    function gerarSaudacao(algumNome){
        return `Ola ${algumNome},tudo bem ?`
    }
    return(
        <div>
            <p>{gerarSaudacao(nome)}</p>
        </div>
    )
}
export default Saudacao;