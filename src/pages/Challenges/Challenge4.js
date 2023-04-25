import React from "react";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import "./Challenge.css";
import Next from "../../assets/Images/arrow_right.png";
import { Link } from "react-router-dom";
import Back from "../../assets/Images/arrow_left.png";

function Challenge4() {
  const ChallengeInfo = {
    challengeId: "Challenge4",
    title: "One Line hTmL",
    url: "/ctf/Challenge4",
    desc: "No Bugs Everything working properly! ... don't worry",
    diff: "Very Easy",
  };
  return (
    <div className="you're close!">
      <div className="Flag{hAcKeR404}"></div>
      <div className="main-container">
        <div className="prev-challenge">
          <Link to={"/ctf/Challenge3"}>
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
          <Link to={"/ctf/Challenge5"}>
            <img className="img-style" src={Next}></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Challenge4;
