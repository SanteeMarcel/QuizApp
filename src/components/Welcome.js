import React from "react";
import Link from "./Link";

const Welcome = () => {
  return (
    <main className="main">
      <h1>Welcome to the Trivia App</h1>

      <h1 className="text">
        You will be presented with 10 True or False questions
      </h1>

      <h1 className="text">Can you score 100%?</h1>

      <Link href="/question1" className="button">
        BEGIN
      </Link>
    </main>
  );
};

export default Welcome;
