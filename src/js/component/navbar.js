import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar-container container navbar navbar-dark bg-dark">
			<div className="row col-8 col-md-4">
				<Link to="/">
					<img className="w-25 rounded" src="https://preview.redd.it/can-someone-help-me-make-a-text-look-like-this-star-wars-v0-6k3wp2zg815d1.png?auto=webp&s=ece29cbc1f498d6d08ad230e03f93eb867d4d857"></img>
				</Link>
			</div>
			<div className="btn-group">
				<button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
				Favourites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
				</ul>
			</div>
		</nav>
	);
};
