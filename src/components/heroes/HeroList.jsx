import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	// const heroes = getHeroesByPublisher(publisher);

	return (
		<div className="row animate__animated animate__fadeIn">
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero}></HeroCard>
			))}
		</div>
	);
};
