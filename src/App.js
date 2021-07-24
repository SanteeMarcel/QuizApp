import React, { useState, useEffect } from "react";
import Route from "./components/Route";
import "./App.css";
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import Results from "./components/Results";
import opentdb from "./apis/opentdb";
import specialCharsToHTML from "./helpers/specialCharsToHTML";
import Error from "./components/Error";

const AMOUNT = 10;

//https://stackoverflow.com/a/53029824/12216698
//Most efficient way of creating arbritary length array
let arrayOfZeros = new Array(10);
for (let i = 0; i < AMOUNT; ++i) arrayOfZeros[i] = 0;

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState(arrayOfZeros);

  useEffect(() => {
    const fetchQuestions = async (AMOUNT) => {
      const { data } = await opentdb.get("https://opentdb.com/api.php", {
        params: {
          amount: AMOUNT,
        },
      }).catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });

      data.results.forEach((element) => {
        element.question = specialCharsToHTML(element.question);
      });

      setQuestions(data.results);
    };

    fetchQuestions(AMOUNT);
  }, []);

  const updateScore = (answer, correct_answer, index) => {
    if (answer === correct_answer) {
      let newScore = scores;
      newScore[index] = 1;
      setScores(newScore);
    }
  };

  return (
    <div>
      <Route path="/">
        <Welcome />
      </Route>

      {questions.length ? (
        questions.map((question, index) => {
          return (
            <Route path={"/question" + (index + 1)} key={"question" + index}>
              <Question
                question={question}
                index={index + 1}
                AMOUNT={AMOUNT}
                updateScore={updateScore}
              />
            </Route>
          );
        })
      ) : (
        <Route path="/question1">
          <Error />
        </Route>
      )}

      <Route path="/results">
        <Results questions={questions} scores={scores} AMOUNT={AMOUNT} />
      </Route>
    </div>
  );
};

export default App;
