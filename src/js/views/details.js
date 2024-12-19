import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
	const {store} = useContext(Context);

	const [details, setDetails] = useState({})
	const [infoStack, setInfoStack] = useState([])
	const {type,id} = useParams();
	

	const infoToShow = () => {
		switch (type) {
			case "people":
				setInfoStack(["Name", "Birth Year", "Gender", "Height", "Skin Color", "Eye Color"]);
				break;
			case "planets":
				setInfoStack(["Name", "Climate", "Population", "Orbital Period", "Rotation Period", "Diameter"]);
				break;
			case "species":
				setInfoStack(["Name", "Classification", "Designation", "Language"]);
				break;
			case "starships":
			case "vehicles":
				setInfoStack(["Name", "Passengers", "Consumables", "Cargo Capacity", "Crew", "Length"]);
				break;
			default:
				setInfoStack(["Name"]);
				break;
		}
	}

	const getDetails = async (type, id) => {
		fetch(store.baseURL+type+"/"+id)
				.then(res => res.json())
				.then(data => {
					localStorage.setItem(type+id,JSON.stringify(data.result.properties))
					setDetails(data.result.properties);
					console.log(data.result);
				})
				.catch(err => console.error(err));
	}

	useEffect(()=>{
		localStorage.getItem(type+id) ? setDetails(JSON.parse(localStorage.getItem(type+id))) : getDetails(type,id);
		infoToShow();
	},[])
	

	return (
		<div className="container mt-3">
			<div className="row d-flex justify-content-center">
				<div className="img-details col-11 col-lg-6 d-flex justify-content-center my-3">
					<img className="object-fit-contain w-100" src="https://lh4.googleusercontent.com/proxy/S2zz1wtu3q_ouBIAcIDhP4yoPuS_2aOZ5HIwDoD99ckLvjVd7QWSPEzPXX8willWC1xYdaMnnDR4TgEVY1ab85yOo3cmA4hi" alt="..."/>
				</div>
				<div className="col-11 col-lg-6 text-white text-center">
					<h1>{details.name}</h1>
					<p className="fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
			<hr className="border border-danger my-4"/>
			<div className="row d-flex justify-content-center">
				{infoStack.map((text, index)=>{
					return (
						<div key={index} className="col-6 col-md-4 col-lg-2">
							<h5 className="text-danger text-center">{text}</h5>
							<h5 className="text-danger text-center mb-5 fw-normal">{details[text.replace(" ", "_").toLowerCase()]}</h5>
						</div>
					)
				})}
			</div>
		</div>
	);
};
