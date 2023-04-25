import React, { useEffect, useState } from "react";
import "./Evaluate.css";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebase/firebase_config";

function Evaluate() {
  const [Ch1, setCh1] = useState(false);
  const [Ch2, setCh2] = useState(false);
  const [Ch3, setCh3] = useState(false);
  const [Ch4, setCh4] = useState(false);
  const [Ch5, setCh5] = useState(false);
  const [Ch6, setCh6] = useState(false);
  let totalCount = 0;

  useEffect(() => {
    onSnapshot(collection(db, "ctf"), (snapshot) => {
      const flags = snapshot.docs.map((doc) => doc.data())[0];

      setCh1(
        localStorage.getItem("Challenge1") === flags["Challenge1"]
          ? true
          : false
      );
      setCh2(
        localStorage.getItem("Challenge2") === flags["Challenge2"]
          ? true
          : false
      );
      setCh3(
        localStorage.getItem("Challenge3") === flags["Challenge3"]
          ? true
          : false
      );
      setCh4(
        localStorage.getItem("Challenge4") === flags["Challenge4"]
          ? true
          : false
      );
      setCh5(
        localStorage.getItem("Challenge5") === flags["Challenge5"]
          ? true
          : false
      );
      setCh6(
        localStorage.getItem("Challenge6") === flags["Challenge6"]
          ? true
          : false
      );
    });
  });

  if (Ch1 === true) {
    totalCount += 1;
  }
  if (Ch2 === true) {
    totalCount += 1;
  }
  if (Ch3 === true) {
    totalCount += 1;
  }
  if (Ch4 === true) {
    totalCount += 1;
  }
  if (Ch5 === true) {
    totalCount += 1;
  }
  if (Ch6 === true) {
    totalCount += 1;
  }

  return (
    <div className="evaluate-main-container">
      <div className="evaluate-card-container">
        <div className="result">
          <p>Challenge 1: {Ch1 === true ? "✅" : "❌"}</p>
          <p>Challenge 2: {Ch2 === true ? "✅" : "❌"}</p>
          <p>Challenge 3: {Ch3 === true ? "✅" : "❌"}</p>
          <p>Challenge 4: {Ch4 === true ? "✅" : "❌"}</p>
          <p>Challenge 5: {Ch5 === true ? "✅" : "❌"}</p>
          <p>Challenge 6: {Ch6 === true ? "✅" : "❌"}</p>
        </div>
        <div className="outoff">
          <p>Score : {totalCount} / 6</p>
          <p style={{ fontSize: "50px" }}>Congratulations!</p>
        </div>
      </div>
    </div>
  );
}

export default Evaluate;
