import {getHeroByPublisher} from "../../selectors/getHeroByPublisher";
import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher = 'Marvel Comics'}) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <div className="col-md-12">
            <div className="row">
                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} hero={hero}/>
                    ))
                }
            </div>
        </div>
    );
};
