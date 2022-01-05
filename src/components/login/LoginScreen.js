import {useNavigate} from "react-router-dom";

const LoginScreen = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/', {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <br/>

            <button className="btn btn-primary" onClick={handleLogin}>Sign In</button>
        </div>
    );
};

export default LoginScreen;
