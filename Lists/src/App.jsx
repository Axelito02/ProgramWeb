import { BtnAdd, BtnDelete, InputCheck, InputText } from "./components"
import React from "react"
import './app.css'
export function App(){
return(
    <>
        <header>
            <InputText type="Text"/>
            <BtnAdd type="Add"/>
        </header>
        <main>
            <InputCheck type="Check"/>
            <BtnDelete type="Delete"/>
        </main>
    </>
)
}
