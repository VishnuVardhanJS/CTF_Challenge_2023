import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'

function Challenge4() {
  const ChallengeInfo = {
    "title" : "TESTING",
    "url" : "www.testing.com",
    "desc" : "This is an test Description about the Challenge"
  }
  return (
    <div className="main-container">
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url}  desc={ChallengeInfo.desc}/>
    </div>
  )
}

export default Challenge4