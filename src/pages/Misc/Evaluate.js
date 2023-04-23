import React, { useEffect, useState } from 'react'
import './Evaluate.css'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import db from '../../firebase/firebase_config'

function Evaluate() {

    const [Ch1, setCh1] = useState(false)
    const [Ch2, setCh2] = useState(false)
    const [Ch3, setCh3] = useState(false)
    const [Ch4, setCh4] = useState(false)
    const [Ch5, setCh5] = useState(false)
    const [Ch6, setCh6] = useState(false)

    useEffect(() => {
        onSnapshot(collection(db, "ctf"),
            (snapshot) => {
                const flags = snapshot.docs.map(doc => doc.data())[0]
                
                setCh1((localStorage.getItem("Challenge1") === flags['Challenge1']) ? true : false)
                setCh2((localStorage.getItem("Challenge2") === flags['Challenge2']) ? true : false)
                setCh3((localStorage.getItem("Challenge3") === flags['Challenge3']) ? true : false)
                setCh4((localStorage.getItem("Challenge4") === flags['Challenge4']) ? true : false)
                setCh5((localStorage.getItem("Challenge5") === flags['Challenge5']) ? true : false)
                setCh6((localStorage.getItem("Challenge6") === flags['Challenge6']) ? true : false)
            }
        );
        // console.log("state " + Ch1)
    }, )

    return (
        <div className='evaluate-main-container'>
            <div className='evaluate-card-container'>
                <div className='result'>
                    <p>Challenge1: {Ch1 ? "❌":"✅"}</p>
                    <p>Challenge2: ❌</p>
                    <p>Challenge3: ✅</p>
                    <p>Challenge4: ❌</p>
                    <p>Challenge5: ✅</p>
                    <p>Challenge6: ✅</p>

                </div>
            </div>
        </div>
    )
}

export default Evaluate