import * as React from 'react';
import "../styles/Loader.css"
import Fan_load from "./../assets/img/Fan_load.png";

export function LoaderFan() {
    return(
        <div className='fan-container' >
            <img className='rotate-center' src={Fan_load.src} height={500} alt='Loading...'></img>
        </div> 
        );
    }
    export default LoaderFan;