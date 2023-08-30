import React from "react";
import './inputs.css';

export function InputCheck({type}){
return(
    <>
        <input className={type} type="checkbox"></input>
    </>
)
}
