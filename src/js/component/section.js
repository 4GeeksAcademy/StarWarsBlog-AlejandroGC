import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Card from "./card";

export const Section = ({title}) => {
    const {store} = useContext(Context);
    

    return (
        <>
            <h1 className="text-start text-white">{title !== "people" ? title[0].toUpperCase() + title.slice(1) : "Characters"}</h1>
            <div className="overflow-x-scroll">
            <div className="d-inline-flex gap-4 mb-3">
                {store[title].map((item)=>{
                    return(
                    <div key={item.uid} className="card">
                        <Card type={title} item={item}/>
                    </div>)
                })}
            </div>
            </div>
        </>
    )
}
