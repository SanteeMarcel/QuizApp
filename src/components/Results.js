import React from "react";
import Link from './Link';

const Results = (props) => {

    const { questions, score, AMOUNT } = props;

    const totalScore = score.reduce((a, b) => a + b, 0);

    return (
        <main className="main">

            <h1>
                You Scored
            </h1>

            <h1>
                {`${totalScore} / ${AMOUNT}`}
            </h1>

            {questions.map((question, index) => {
                return (

                    <h1 className="text">
                        {(score[index] ? "+ " : "- ") + question.question}
                    </h1>
                );
            })}

            <Link href="/" className="button" >
                PLAY AGAIN?
            </Link>

        </main>
    );
}

export default Results;