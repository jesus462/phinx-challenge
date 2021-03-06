import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./views/Home";
import injectContext from "./store/Context";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
