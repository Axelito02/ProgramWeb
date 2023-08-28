import {Header, Btns, Counter} from './components'
import React from "react"
import './components/app.css'

export function App(){
return(
    <section className='mainContainer'>
        <Header/> 
        <Counter numb='0'/> 
        <div className='containerBtn'>
            <Btns tag="Rest"/> 
            <Btns tag="Sum"/> 
        </div>
    </section>
)
}
