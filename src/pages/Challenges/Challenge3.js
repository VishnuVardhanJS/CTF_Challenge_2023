import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import "./Challenge.css";
import Next from "../../assets/Images/arrow_right.png";
import { Link } from "react-router-dom";
import Back from "../../assets/Images/arrow_left.png";

function Challenge3() {
  const ChallengeInfo = {
    challengeId: "Challenge3",
    title: "Forensics",
    url: "https://drive.google.com/file/d/1ckP59WL-MT-Nn2uQ6FnmaAfTREMERq1c/view?usp=share_link",
    desc: "Analyse a file using Brain",
    diff: "Very Easy",
  };
  return (
    <div className="main-container">
      <div className="prev-challenge">
        <Link to={"/Challenge2"}>
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
        <Link to={"/Challenge4"}>
          <img className="img-style" src={Next}></img>
        </Link>
      </div>
    </div>
  );
}

export default Challenge3;
