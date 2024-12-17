import React, {useState} from "react";
import { Link } from "react-router-dom";

const Card = ({type,item}) => {
    const [fav, setFav] = useState(false);

    return (
        <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVGnhgYA0edfP3QhZSxzqj2zKDN8Kj0oZBg&s" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title pb-2">{item.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={"/details/"+type+"/"+item.uid}><button className="details-btn btn" >Learn More!</button></Link>
                    <button onClick={()=>setFav(!fav)} className="fav-btn rounded px-3"><i className={(fav ? "fa-solid" : "fa-regular") + " fa-heart"}></i></button>
                </div>
            </div>
        </>
    )
}

export default Card