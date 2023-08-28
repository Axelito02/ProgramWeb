import React from "react";
// import './button.css'

export function Btns({tag}){
    const btnsStyle = {
        backgroundColor: '#3A60F5',
        color: '#DFE6EA',
        padding: '10px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        width: '160px',
        fontWeight: '900'
    }

return(
    <>
        <button className='btns' style={btnsStyle}>{tag}</button>
    </>
)
}
