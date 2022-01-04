import {BrowserRouter, Route, Routes} from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import LoginScreen from "../components/login/LoginScreen";
import {Navbar} from "../components/ui/Navbar";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MarvelScreen/>}/>
                <Route path="/marvel" element={<MarvelScreen/>}/>
                <Route path="/dc" element={<DcScreen/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
