import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Section } from "../component/section";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store} = useContext(Context);

	return (
		<div className="container mt-3">
			{store.resources.slice(1).map((resource, index)=>{ // Index 0 resource is not displayed
				return (
					<section key={index} className="py-5">
						<Section title={resource}/>
					</section>
				)
			})}
		</div>
	)
};