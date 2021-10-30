import React from "react";
import { heroes } from "../../data/heroes";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {
	const heroesFiltered = heroes;

	const [formValues, handleInputChange, reset] = useForm({
		searchText: "",
	});

	const { searchText } = formValues;

	const handleSearch = (e) => {
		e.preventDefault();
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
