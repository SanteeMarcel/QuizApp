import React from "react";
import Link from "./Link";

const Results = (props) => {
  const { questions, scores, AMOUNT } = props;

  const totalScore = scores.reduce((a, b) => a + b, 0);

  return (
    <main className="main">
      <h1>You Scored</h1>

      <h1>{`${totalScore} / ${AMOUNT}`}</h1>

      {questions.map((question, index) => {
        return (
          <ul style={{ listStyleType: "none" }}>
            <li key={index} className="text">
              <h1 className="text">
                {(scores[index] ? "+ " : "- ") + question.question}
              </h1>
            </li>
          </ul>
        );
      })}

      <div onClick={() => window.location.reload()}>
        <Link href="/" className="button">
          PLAY AGAIN?
        </Link>
      </div>
    </main>
  );
};

export default Results;
