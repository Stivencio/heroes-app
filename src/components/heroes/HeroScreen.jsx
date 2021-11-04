import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";
import { heroImages } from "../../helpers/heroImages";
// import batman from "../../assets/heroes/dc-batman.jpg"; // recurso estático

export const HeroScreen = ({ history }) => {
	const { heroeId } = useParams();

	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
	// const hero = getHeroById(heroeId);

	if (!!!hero) {
		return <Redirect to="/" />;
	}

	const handleReturn = () => {
		if (history.length <= 2) {
			if (publisher === "DC Comics") {
				history.push("/dc");
			} else {
				history.push("/marvel");
			}
		} else {
			history.goBack();
		}
	};

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	return (
		<div className="row mt-5 ">
			<div className="col-4">
				<img
					// src={`../assets/heroes/${heroeId}.jpg`} //desde public/assets
					// src={batman} // import
					src={heroImages(`./${heroeId}.jpg`).default}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8">
				<h3>{superhero}</h3>
				<br />
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>Alter ego: </b> {alter_ego}{" "}
					</li>
					<li className="list-group-item">
						<b>Publisher: </b> {publisher}{" "}
					</li>
					<li className="list-group-item">
						<b>First appearance: </b> {first_appearance}{" "}
					</li>
				</ul>
				<br />
				<h5>Characters</h5>
				<p>{characters}</p>

				<button className="btn btn-outline-warning" onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};
