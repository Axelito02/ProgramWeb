import { BtnAdd, InputText, ContainerItems } from "./components"
import React from "react"
import './app.css'

export function App(){
return(
    <>
        <div className="title">
            <h2> List your's taks </h2>
        </div>
        <header>
            <div>
                <InputText type="Text"/>
            </div>
            <div>
                <BtnAdd type="Add"/>
            </div>
        </header>
        <main>
           <ContainerItems/>
        </main>
    </>
)
}
