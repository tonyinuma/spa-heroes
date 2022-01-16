import {useNavigate} from "react-router-dom";
import {types} from "../../types/types";
import {useContext} from "react";
import {AuthContext} from "../../auth/authContext";

const LoginScreen = () => {

    const navigate = useNavigate();
    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Tony ID'
            }
        }
        dispatch(action);

        const path = localStorage.getItem('lastPath') || '/';

        navigate(path, {
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
