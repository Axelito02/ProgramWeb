import React from "react";
import './button.css'

export function Btns({tag}){
return(
    <>
        <button className={tag}>{tag}</button>
    </>
)
}
