import React from "react";
import {useState} from "react";
const Slide = ({img, i})=>{
    return (
        <>
            <div className="slider-cont-slide">
                <img src={img} key={i} alt="slider"/>
            </div>
        </>
    );
}
export default Slide;