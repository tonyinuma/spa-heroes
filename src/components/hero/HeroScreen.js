import {Navigate, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";

const HeroScreen = () => {

    const {id} = useParams();
    const hero = getHeroById(id)

    if (!hero) return <Navigate to="/"/>

    return (
        <h1>
            {hero.superhero}
        </h1>
    );
};

export default HeroScreen;
