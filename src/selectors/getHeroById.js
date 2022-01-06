import {heroes} from '../data/heroes';

const getHeroByPublisher = (id) => {
    return heroes.filter(hero => hero.id === id);
}
