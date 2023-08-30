import React from "react";
import './btns.css'

export function BtnAdd({type}){
return(
    <>
        <button className={type}>{type}</button>
    </>
)
}
