import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import "./Challenge.css";
import Next from "../../assets/Images/arrow_right.png";
import { Link } from "react-router-dom";
import Back from "../../assets/Images/arrow_left.png";

function Challenge5() {
  const ChallengeInfo = {
    challengeId: "Challenge5",
    title: "Top FlooR iS Empty",
    url: "https://pastebin.com/8zi5fYLQ",
    desc: "If you know you Know!",
    diff: "Easy/Medium",
  };
  return (
    <div className="main-container">
      <div className="prev-challenge">
        <Link to={"/ctf/Challenge4"}>
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
        <Link to={"/ctf/Challenge6"}>
          <img className="img-style" src={Next}></img>
        </Link>
      </div>
    </div>
  );
}

export default Challenge5;
