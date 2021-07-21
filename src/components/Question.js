import React from 'react';
import Link from './Link';
import specialCharsToHTML from '../helpers/specialCharsToHTML';


const Question = (props) => {

    const { question, index, AMOUNT, updateScore } = props;

    const href = index !== AMOUNT ? "/question" + (index + 1) : "/results"


    return (

        <main className="main">

            <h1>{question.category}</h1>

            <fieldset className="box">{specialCharsToHTML(question.question)}</fieldset>

            <h1 className="text">{`${index} out of 10`}</h1>

            <div style={{ display: 'inline-block' }}>
                <div onClick={() => updateScore("True", question.correct_answer, index - 1)} style={{ display: 'inline-block' }}>
                    <Link href={href} className="button" >
                        TRUE
                    </Link>
                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <div onClick={() => updateScore("False", question.correct_answer, index - 1)} style={{ display: 'inline-block' }}>
                    <Link href={href} className="button">
                        FALSE
                    </Link>
                </div>
            </div>


        </main>
    );

};

export default Question;