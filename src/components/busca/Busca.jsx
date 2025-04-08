import gitHub from "../../assets/image 2.svg";
import logoGithub from "../../assets/image 1.svg";
import buscaImg from "../../assets/Frame 52.svg";
import "./Busca.css";
import { useState } from "react";

const Busca = ({ onSearch }) => {
    const [userName, setUserName] = useState();

    const buscarUsuario = (e) => {
        e.preventDefault();
        onSearch(userName.trim());
    };
    return (
        <div className="divconatinerBusca ">
            <div className="divHeader">
                <img src={logoGithub} className="divHeaderImg " />
                <h1>Perfil</h1>
                <img src={gitHub} />
            </div>
            <form onSubmit={buscarUsuario}>
                <div className="divInput">
                    <input
                        type="text"
                        placeholder="Digite um usuário do Github"
                        className="divHeaderInput"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <div className="divBusca">
                        <button type="submit">
                            <img src={buscaImg} />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Busca;
