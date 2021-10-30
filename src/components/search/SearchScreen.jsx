import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = ({ history }) => {
	//location es un hook de React Router, sirve para obtener algunos parametros como el pathname, search, etc.
	const location = useLocation();
	//queryString parsea todos los parametros de la url y los separa en un objeto para manipularlos de mejor forma, en este caso solo vamos a utilizar el primer parametro que definimos como "q" de "query" y le damos el valor '' en caso de que no reciba ningun parametro, para que no quede en null
	const { q = "" } = queryString.parse(location.search);

	const [formValues, handleInputChange, reset] = useForm({
		searchText: q,
	});
	const { searchText } = formValues;
	const heroesFiltered = heroes;

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
		console.log(searchText);
	};

	return (
		<>
			<h1>SearchScreen</h1>
			<hr />

			<div className="row">
				<div className="col-5">
					<h4>Search Form</h4>
					<form onSubmit={handleSearch}>
						<input
							type="text"
							placeholder="Search your hero"
							className="form-control"
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
							autoComplete="off"
						/>

						<button
							type="submit"
							className="btn m-2 btn-block btn-outline-primary"
						>
							Search
						</button>
					</form>
				</div>

				<div className="col-7">
					<h4>Results</h4>
					<hr />

					{heroesFiltered.map((hero) => (
						<HeroCard key={hero.id} {...hero} />
					))}
				</div>
			</div>
		</>
	);
};
