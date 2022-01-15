import AppRouter from "./routers/AppRouter";
import {AuthContext} from "./auth/authContext";
import {useReducer} from "react";
import {authReducer} from "./auth/authReducer";

const init = () => {
    return {
        logged: true,
        name: 'Tony'
    }
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);

    return <AuthContext.Provider value={{user, dispatch}}>
        <AppRouter/>
    </AuthContext.Provider>;
};

export default HeroesApp;
