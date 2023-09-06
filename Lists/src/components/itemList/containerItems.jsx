import { InputCheck } from "../inputs/inputCheck";
import { BtnDelete } from "../btns/btnDelete";
import React from "react";
import './listTaks.css'

export function ContainerItems(){
return(
    <>
        <div className="ListTaks">
            <div>
                <InputCheck type="Check"/>
            </div>
            <div>
                <p>Buenas</p>
            </div>
            <div>
                <BtnDelete type="Delete"/>
            </div>
        </div>
    </>
)
}
