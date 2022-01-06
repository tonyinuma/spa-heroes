import {heroes} from '../data/heroes';

export const getHeroByPublisher = (id) => {
    return heroes.filter(hero => hero.id === id);
}
