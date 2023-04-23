import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import Next from '../../assets/Images/arrow_right.png'
import { Link } from 'react-router-dom'
import './Challenge.css'


function Challenge1() {
  console.log(process.env.REACT_APP_TEST_KEY)
  const ChallengeInfo = {
    "challengeId": "Challenge1",
    "title": "Steganography #1",
    "url": "https://drive.google.com/file/d/1JJ5lsA0jC3Bbpwm7wNGVw5o2h8XrqNse/view",
    "desc": "This is an simple Steganography Challenge",
    "diff": "Easy"
  }
  return (
    <div className="main-container">
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url} desc={ChallengeInfo.desc} diff={ChallengeInfo.diff} challengeId={ChallengeInfo.challengeId} />
      <div className='next-challenge'>
        <Link to={"/Challenge2"}>
          <img src={Next}></img>
        </Link>
      </div>
    </div>
  )
}

export default Challenge1