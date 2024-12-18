import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import { Section } from "../component/section";
import { Context } from "../store/appContext";

export const Home = () => {

	const {store,actions} = useContext(Context);

	useEffect(()=>{
		localStorage.getItem("resources") ? actions.loadData() : actions.getResources();
	},[]);

	useEffect(()=>{
		store.resources.map((item)=>{
			actions.getNames(item);
		})
	},[store.resources]);

	return (
		<div className="container mt-3 d-flex flex-column">
			{store.resources.slice(1).map((resource, index)=>{ // Index 0 resource is not displayed
				return (
					<section key={index} className="container py-5">
						<Section title={resource}/>
					</section>
				)
			})}
		</div>
	)
};