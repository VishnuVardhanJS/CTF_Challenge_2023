import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import './Challenge.css'
import Next from '../../assets/Images/arrow_right.png'
import { Link } from 'react-router-dom'
import Back from '../../assets/Images/arrow_left.png'


function Challenge3() {
  const ChallengeInfo = {
    "challengeId": "Challenge3",
    "title": "Strings #1",
    "url": "https://drive.google.com/file/d/1ckP59WL-MT-Nn2uQ6FnmaAfTREMERq1c/view?usp=share_link",
    "desc": "No Description because it too easy",
    "diff": "Very Easy"
  }
  return (
    <div className="main-container">
      <div className='prev-challenge'>
        <Link to={"/Challenge2"}>
          <img src={Back}></img>
        </Link>
      </div>
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url} desc={ChallengeInfo.desc} diff={ChallengeInfo.diff} challengeId={ChallengeInfo.challengeId} />
      <div className='next-challenge'>
        <Link to={"/Challenge4"}>
          <img src={Next}></img>
        </Link>
      </div>
    </div>
  )
}

export default Challenge3