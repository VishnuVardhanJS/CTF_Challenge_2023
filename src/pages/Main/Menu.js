import React from 'react'
import DisplayCard from '../../components/DisplayCard/DisplayCard'
import "./Main.css"
import Code from '../Misc/Code'

function Menu() {

    const data = [
        {
            title: "Code Debugging",
            url: "Code"
        },
        {
            title: "CTF",
            url: "ctf"
        },
    ]
    return (
        <div className="main-container">
            <DisplayCard data={data} />
        </div>
    )
}

export default Menu