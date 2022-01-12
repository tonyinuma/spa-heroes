import {getHeroByPublisher} from "../../selectors/getHeroByPublisher";
import {HeroCard} from "./HeroCard";
import {useMemo} from "react";

export const HeroList = ({publisher = 'Marvel Comics'}) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

    return (
        <div className="col-md-12 animate__animated animate__bounceInRight">
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
