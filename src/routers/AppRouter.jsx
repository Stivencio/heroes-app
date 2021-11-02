import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../auth/AuthContext";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
	const { user } = useContext(AuthContext);
	console.log(user);
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute
						exact
						path="/login"
						component={LoginScreen}
						isAuth={user.logged}
					/>
					<PrivateRoute
						path="/"
						component={DashboardRoutes}
						isAuth={user.logged}
					/>
				</Switch>
			</div>
		</Router>
	);
};
