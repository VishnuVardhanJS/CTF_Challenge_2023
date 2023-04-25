import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import Next from "../../assets/Images/arrow_right.png";
import { Link } from "react-router-dom";
import "./Challenge.css";

function Challenge1() {
  const ChallengeInfo = {
    challengeId: "Challenge1",
    title: "Welcome To HICET",
    url: "https://drive.google.com/file/d/1JJ5lsA0jC3Bbpwm7wNGVw5o2h8XrqNse/view",
    desc: "This is an simple Steganography Challenge",
    diff: "Easy",
  };

  return (
    <div className="main-container">
      <div className="img-style">

      </div>
      <ChallengeCard
        title={ChallengeInfo.title}
        url={ChallengeInfo.url}
        desc={ChallengeInfo.desc}
        diff={ChallengeInfo.diff}
        challengeId={ChallengeInfo.challengeId}
      />
      <div className="next-challenge">
        <Link to={"/ctf/Challenge2"}>
          <img className="img-style" src={Next}></img>
        </Link>
      </div>
    </div>
  );
}

export default Challenge1;
