import "./Erro.css";
import "animate.css";
const Erro = () => {
    return (
        <div className="containerErro animate__animated animate__backInUp">
            <p>
                Nenhum perfil foi encontrado com esse nome de usuário.
                <br /> Tente novamente
            </p>
        </div>
    );
};

export default Erro;
