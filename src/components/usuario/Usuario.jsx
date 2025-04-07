import "./Usuario.css";
const Usuario = ({ user }) => {
    return (
        <div className="containerUser">
            <img src={user.avatar_url} className="imgUser" />
            <div className="divDados">
                <h3>{user.name || user.login}</h3>
                <p>{user.bio || "Sem bio disponível."}</p>
            </div>
        </div>
    );
};

export default Usuario;
