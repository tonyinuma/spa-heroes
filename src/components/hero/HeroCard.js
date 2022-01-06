export const HeroCard = ({hero}) => {

    const imagePath = `/assets/images/heroes/${hero.id}.jpg`;

    return (
        <div className="col">
            <div className="card bg-dark text-white">
                <img src={imagePath} className="card-img-top" alt={hero.superhero}/>
                <div className="card-img-overlay">
                    <h5 className="card-title text-info px-2" style={{background: 'black', borderRadius: '5px'}}>
                        <b>{hero.superhero}</b>
                        <p style={{color: 'gray'}}>{hero.alter_ego}</p>
                    </h5>
                </div>
            </div>
        </div>
    );
};
