import { useEffect, useState } from "react";
import Busca from "../busca/Busca";
import Usuario from "../usuario/Usuario";
import "./Container.css";
import Erro from "../erro/Erro";
import { SyncLoader } from "react-spinners";
const Container = () => {
    const [user, setUser] = useState(null);
    const [erro, setErro] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const buscar = async (userName) => {
        try {
            setErro(false);
            setUser(null);
            setIsLoading(true);

            const resposta = await fetch(
                `https://api.github.com/users/${userName}`
            );
            if (!resposta.ok) {
                setErro(true);
                return;
            }

            const data = await resposta.json();
            setUser(data);
        } catch (err) {
            setErro(true);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="divCamada">
                <img src="src/assets/Camada_1.svg" className="imgCamada" />
            </div>
            <div className="divElipce1 ">
                <img src="src/assets/Ellipse 1.svg" />
            </div>
            <div className="divElipce2">
                <img src="src/assets/Ellipse 2.svg" />
            </div>
            <div className="container2">
                <Busca onSearch={buscar} />
                {isLoading && <SyncLoader color="white" />}
                {!isLoading && user && <Usuario user={user} />}
                {!isLoading && erro && <Erro />}
            </div>
        </div>
    );
};

export default Container;
