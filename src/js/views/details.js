import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Details = () => {
	const {store} = useContext(Context);

	const [details, setDetails] = useState({})
	const [info, setInfo] = useState({})
	const {type,id} = useParams();

	const getDetails = async (type, id) => {
		fetch(store.baseURL+type+"/"+id)
				.then(res => res.json())
				.then(data => {
					setDetails(data.result.properties);
					console.log(data.result);
				})
				.catch(err => console.error(err));
	}

	useEffect(()=>{
		getDetails(type,id);
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
			<div className="row">
				<div className="col-4 col-md-2 mb-5">
					<h5 className="text-danger text-center">Name<br/><br/>{details.name}</h5>
				</div>
				<div className="col-4 col-md-2">
					<h5 className="text-danger text-center">Birth Year<br/><br/>{details.birth_year}</h5>
				</div>
				<div className="col-4 col-md-2">
					<h5 className="text-danger text-center">Gender<br/><br/>{details.gender}</h5>
				</div>
				<div className="col-4 col-md-2">
					<h5 className="text-danger text-center">Height<br/><br/>{details.height}</h5>
				</div>
				<div className="col-4 col-md-2">
					<h5 className="text-danger text-center">Skin Color<br/><br/>{details.skin_color}</h5>
				</div>
				<div className="col-4 col-md-2">
					<h5 className="text-danger text-center">Eye Color<br/><br/>{details.eye_color}</h5>
				</div>
			</div>
		</div>
	);
};
