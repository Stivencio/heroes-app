import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({
	isAuth,
	component: Component,
	//En los argumentos, los "..." es el rest
	...rest
}) => {
	// console.log(rest);
	// console.log(rest.location.pathname);
	// console.log(rest.location.pathname + rest.location.search);
	const lastLocation = rest.location.pathname + rest.location.search;
	console.log(lastLocation);

	localStorage.setItem("lastPath", lastLocation);

	return (
		<Route
			{...rest}
			component={(props) =>
				//En los componentes, los "..." es el spread
				isAuth ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

PrivateRoute.propTypes = {
	isAuth: PropTypes.bool.isRequired,
	component: PropTypes.func.isRequired,
};
