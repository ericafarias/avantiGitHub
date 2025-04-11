import "./Usuario.css";
import "animate.css";
const Usuario = ({ user }) => {
    return (
        <div className="containerUser animate__animated animate__backInUp">
            <img src={user.avatar_url} className="imgUser" />
            <div className="divDados">
                <h3>{user.name || user.login}</h3>
                <p>{user.bio || "Sem bio disponível."}</p>
            </div>
        </div>
    );
};

export default Usuario;
