import React, {useState,useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Card from "./card";

export const Section = ({title}) => {
    const {store} = useContext(Context);

    return (
        <>
            <h1 className="text-start text-white">{title !== "people" ? title[0].toUpperCase() + title.slice(1) : "Characters"}</h1>
            <div className="overflow-x-scroll">
            <div className="d-inline-flex">
                {store[title].map((item)=>{
                    return(
                    <div key={item.uid} className="card me-4 mb-4">
                        <Card type={title} item={item}/>
                    </div>)
                })}
            </div>
            </div>
        </>
    )
}
