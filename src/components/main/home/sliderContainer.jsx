import React from 'react';
import Slide from './slide';
const cache = {};var images = [];
function importAll(r) {r.keys().forEach((key) => (cache[key] = r(key)));}
importAll(require.context("../../../assets/home-slider", false, /\.(png|jpe?g|svg|avif|webp)$/));
// eslint-disable-next-line
Object.entries(cache).map((module, i) => {images[i] = module[1]});
const SliderCreation = () => {
    return (
        <div className="slider-cont">
            {images.map((image, i) => {
                return <Slide img={image} key={i}/>
            })}
        </div>
    );
}

export default SliderCreation;