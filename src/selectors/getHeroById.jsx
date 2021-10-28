import { heroes } from "../data/heroes";
export const getHeroByPublisher = (id) => {
	return heroes.find((hero) => hero.id === id);
};
