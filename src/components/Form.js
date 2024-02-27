function From(){
    function cadastrarUsuario(e){
        e.preventDefault();
        console.log("Cadastrou usuario!")
    }
    
    return(

        <div>
            <h1>Meu cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type=""placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}
export default From