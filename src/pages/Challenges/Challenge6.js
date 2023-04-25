import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import "./Challenge.css";
import Next from "../../assets/Images/arrow_right.png";
import { Link } from "react-router-dom";
import Back from "../../assets/Images/arrow_left.png";

function Challenge6() {
  const ChallengeInfo = {
    challengeId: "Challenge6",
    title: "NoO ScaRRY ScEnariO",
    desc: " You got an interview with a small cybersecurity company; the Keeber Security Group. Before interviewing, they want to test your skills through a series of challenges oriented around investigating the Keeber Security Group.",
    url: "https://keebersecuritygroup.com",
    diff: "Easy",
  };
  return (
    <div className="main-container">
      <div className="prev-challenge">
        <Link to={"/Challenge5"}>
          <img className="img-style" src={Back}></img>
        </Link>
      </div>
      <ChallengeCard
        title={ChallengeInfo.title}
        url={ChallengeInfo.url}
        desc={ChallengeInfo.desc}
        diff={ChallengeInfo.diff}
        challengeId={ChallengeInfo.challengeId}
      />
      <div className="next-challenge">
        <Link to={"/Evaluate"}>
          <img className="img-style" src={Next}></img>
        </Link>
      </div>
    </div>
  );
}

export default Challenge6;
