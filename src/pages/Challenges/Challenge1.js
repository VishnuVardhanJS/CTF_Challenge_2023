import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import Next from '../../assets/Images/arrow_right.png'
import './Challenge.css'

function Challenge1() {

  const ChallengeInfo = {
    "challengeId": "Challenge1",
    "title": "Steganography #1",
    "url": "https://drive.google.com/file/d/1JJ5lsA0jC3Bbpwm7wNGVw5o2h8XrqNse/view",
    "desc": "This is an simple Steganography Challenge",
    "hint": "Don't overthink!"
  }
  return (
    <div className="main-container">
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url} desc={ChallengeInfo.desc} hint={ChallengeInfo.hint} challengeId={ChallengeInfo.challengeId} />
    </div>
  )
}

export default Challenge1