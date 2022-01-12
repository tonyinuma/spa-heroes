import {Navbar} from "../components/ui/Navbar";
import {Route, Routes} from "react-router-dom";
import MarvelScreen from "../components/marvel/MarvelScreen";
import DcScreen from "../components/dc/DcScreen";
import SearchScreen from "../components/search/SearchScreen";
import HeroScreen from "../components/hero/HeroScreen";

const DashboardRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen/>}/>
                    <Route path="dc" element={<DcScreen/>}/>
                    <Route path="search" element={<SearchScreen/>}/>
                    <Route path="hero/:id" element={<HeroScreen/>}/>
                    <Route path="/" element={<MarvelScreen/>}/>
                </Routes>
            </div>
        </>
    );
};

export default DashboardRouter;
