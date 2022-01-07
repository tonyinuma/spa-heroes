import {Link} from "react-router-dom";

export const HeroCard = ({hero}) => {

    const imagePath = `/assets/images/heroes/${hero.id}.jpg`;

    return (
        <div className="col">
            <div className="card bg-dark text-white">
                <Link to={`/hero/${hero.id}`}>
                    <img src={imagePath} className="card-img-top" alt={hero.superhero}/>
                    <div className="card-img-overlay">
                        <h4 className="card-title text-info px-2 position-absolute bottom-0 start-0">
                            <b style={{background: 'black'}}>{hero.superhero}</b>
                            <p className="text-success" style={{background: 'black'}}>{hero.alter_ego}</p>
                            {
                                <p style={{
                                    background: 'black',
                                    color: 'white',
                                    fontSize: '12px'
                                }}>
                                    {hero.alter_ego !== hero.characters && `${hero.characters} /`} {hero.first_appearance}
                                </p>
                            }
                        </h4>
                    </div>
                </Link>
            </div>
        </div>
    );
};
