import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'

function Challenge2() {

  const ChallengeInfo = {
    "title" : "Steganography #2",
    "url" : "https://drive.google.com/file/d/1GhdwXa0NkQuclNA2yuk4pBbaOn84VlhO/view?usp=share_link",
    "desc" : "This is also an simple Steganography Challenge",
    "hint" : "Not in the image you see"
  }
  return (
    <div className="main-container">
      <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url}  desc={ChallengeInfo.desc} hint={ChallengeInfo.hint}/>
    </div>
  )
}

export default Challenge2