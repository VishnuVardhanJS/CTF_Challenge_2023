import React from 'react'
import DisplayCard from '../../components/DisplayCard/DisplayCard'
import '../Main/Main.css'

function Code() {

  // const [Round1, setRound1] = useState("");
  // const [Round2, setRound2] = useState("");

  const data = [
    {
        title: "Round 1",
        url: "/"
    },
    {
        title: "Round 2",
        url: "https://docs.google.com/forms/d/1cuNJ-KyhIRGJuNZdQXcPuPdfqjhKzRLlhqc5Lxmi5qA/viewform?ts=6447aeb8&edit_requested=true"
    },
]

  return (
    <div className="main-container">
      <DisplayCard data={data} />
    </div>
  )
}

export default Code