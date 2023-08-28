import React from "react"

export function Header({title, color}) {

    const style = {
        color: color
    }

    return (
        <>
            <header>
                <h1 style={style} className='header'>{title}</h1>
            </header>
        </>
    )
}
