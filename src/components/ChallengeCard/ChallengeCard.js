import React from 'react'
import { useState } from 'react';
import { Link } from "react-router-dom";
import "./ChallengeCard.css"
import Swal from 'sweetalert2'



function ChallengeCard({ title, url, desc, diff, challengeId }) {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        localStorage.setItem(challengeId, input)
    }

    return (
        <div className='main-challenge-container'>
            <div style={{ display: modalIsOpen ? 'block' : 'none', justifyContent: 'center' ,alignItems: 'center', position: 'absolute', width: '30%', height: '30vh'}}>
                <div  className='modal-input'>
                    <div className='modal-input-field'>
                        <p>Submit Flag : </p>
                        <input onChange={(event)=>{setInput(event.target.value)}}></input>
                    </div>
                    <a onClick={() => { closeModal() }} className="card-container-btn">Submit Flag</a >
                </div>
            </div>

            <div className='challenge-card-container'>
                <p className="card-text"> {title}</p>
                <p className="card-text">Description : {desc}</p>
                <p className="card-text">Difficulty : {diff}</p>
                <div className='btns-container'>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="card-container-btn">Open Challenge</a >
                    <a onClick={() => { openModal() }} className="card-container-btn">Submit Flag</a >
                </div>
            </div>
            
        </div>
    )
}

export default ChallengeCard