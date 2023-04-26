import React, { useEffect, useState } from 'react'
import DisplayCard from '../../components/DisplayCard/DisplayCard'
import '../Main/Main.css'
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebase_config";

function Code() {

  const [Round1, setRound1] = useState("");
  const [Round2, setRound2] = useState("");


  useEffect(() => {
    onSnapshot(collection(db, "code"), (snapshot) => {
      const code = snapshot.docs.map((doc) => doc.data())[0];
      setRound1(code["Round1"]);
      setRound2(code["Round2"]);
      
    });
  });

  const data = [
    {
        title: "Round 1",
        url: Round1
    },
    {
        title: "Round 2",
        url: Round2
    },
]

  return (
    <div className="main-container">
      <DisplayCard data={data} />
    </div>
  )
}

export default Code