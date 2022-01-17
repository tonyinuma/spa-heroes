import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";
import {useMemo} from "react";

const heroImages = require.context('../../assets/images/heroes', true);

const HeroScreen = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id), [id]);

    if (!hero) return <Navigate to="/"/>

    const handleReturn = () => {
        navigate(-1);
    }

    return (
        <div className="row mt-5 animate__animated animate__bounceInLeft">
            <div className="col-md-4 animate__animated animate__fadeIn">
                <img src={heroImages(`./${hero.id}.jpg`)} alt={hero.id} className="img-thumbnail"/>
            </div>
            <div className="col-md-8">
                <h3>{hero.superhero}</h3>
                <ul className="list-group">
                    <li className="list-group-item mt-1"><b>Alter Ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item mt-1"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item mt-1"><b>First Appearance:</b> {hero.first_appearance}</li>
                </ul>
                <h5 className="mt-4">Characters</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-info" onClick={handleReturn}>Back to List</button>
            </div>
        </div>
    );
};

export default HeroScreen;
