import AppRouter from "./routers/AppRouter";
import {AuthContext} from "./auth/authContext";

const HeroesApp = () => {
    return <AuthContext.Provider value={{name: 'Tony'}}>
        <AppRouter/>
    </AuthContext.Provider>;
};

export default HeroesApp;
