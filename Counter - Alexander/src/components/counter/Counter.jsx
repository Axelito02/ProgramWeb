import React from "react";

export function Counter({numb}){
    const CounterStyle ={
        fontSize: "70px",
        margin: "40px 0px"
     }

return(
    <>
    <h2 style={CounterStyle}>{numb}</h2>
    </>
)
}
