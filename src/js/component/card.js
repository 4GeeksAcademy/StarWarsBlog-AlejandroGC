import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Card = ({type,item}) => {
    const {store, actions} = useContext(Context);

    return (
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVGnhgYA0edfP3QhZSxzqj2zKDN8Kj0oZBg&s" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title pb-2">{item.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={"/details/"+type+"/"+item.uid}><button className="details-btn btn" >Learn More!</button></Link>
                    <button onClick={()=>actions.handleFav(store.favourites.some((value)=>item.name === value), item)} className="fav-btn rounded px-3"><i className={(store.favourites.some((value)=>item.name === value) ? "fa-solid" : "fa-regular") + " fa-heart"}></i></button>
                </div>
            </div>
        </>
    )
}

export default Card