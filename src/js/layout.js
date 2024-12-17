import React, { useEffect,useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home";
import { Details } from "./views/details";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const {store,actions} = useContext(Context);

	useEffect(()=>{actions.getResources()},[]);
	useEffect(()=>{
		store.resources.map((item)=>{
			actions.getNames(item);
		})
	},[store.resources]);

	return (
		<div className="layout bg-dark">
			<BrowserRouter basename={basename}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/details/:type/:id" element={<Details />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
