import {getHeroByPublisher} from "../../selectors/getHeroByPublisher";

export const MyComponent = ({publisher = 'marvel'}) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <>
            <h1>Hero List - {publisher}</h1>
            <ul>
                {
                    heroes.map(hero => (
                        <li key={hero.id}>{hero.superhero}</li>
                    ))
                }
            </ul>
        </>
    );
};
