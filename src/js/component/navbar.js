import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<nav className="navbar-container container navbar navbar-dark bg-dark">
			<div className="row col-3 col-md-2 col-lg-1">
				<Link to="/">
					<img className="object-fit-contain rounded w-100" src="https://preview.redd.it/can-someone-help-me-make-a-text-look-like-this-star-wars-v0-6k3wp2zg815d1.png?auto=webp&s=ece29cbc1f498d6d08ad230e03f93eb867d4d857"></img>
				</Link>
			</div>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites <span className="bg-secondary px-1">{store.favourites.length}</span>
				</button>
				<ul className="dropdown-menu dropdown-menu-end p-2">
					{store.favourites.length === 0 ? <h6>Empty</h6> :
					store.favourites.map((name, index)=>
						<li key={index} className="d-flex justify-content-between"><h6 className="m-0">{name}</h6><span><button className="border-0" onClick={()=>actions.deleteFavBox(index)}><i id={index} className="fa-solid fa-trash"></i></button></span></li>
					)}
				</ul>
			</div>
		</nav>
	);
};
