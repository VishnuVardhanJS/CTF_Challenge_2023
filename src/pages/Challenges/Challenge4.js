import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import './Challenge.css'
import Next from '../../assets/Images/arrow_right.png'
import { Link } from 'react-router-dom'
import Back from '../../assets/Images/arrow_left.png'


function Challenge4() {
  const ChallengeInfo = {
    "challengeId": "Challenge4",
    "title" : "TESTING",
    "url" : "www.testing.com",
    "desc" : "This is an test Description about the Challenge"
  }
  return (
    <div className="main-container">
      <div className='prev-challenge'>
        <Link to={"/Challenge3"}>
          <img src={Back}></img>
        </Link>
      </div>
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url}  desc={ChallengeInfo.desc} hint={ChallengeInfo.hint} challengeId={ChallengeInfo.challengeId}/>
      <div className='next-challenge'>
        <Link to={"/Challenge5"}>
          <img src={Next}></img>
        </Link>
      </div>
    </div>
  )
}

export default Challenge4