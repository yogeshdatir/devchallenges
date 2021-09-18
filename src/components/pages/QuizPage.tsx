import React, { useState } from "react";
import useQuiz from "../../hooks/useQuiz";
import Footer from "../Footer";
import QuizCard from "../quiz/quizCard/QuizCard";
import ResultCard from "../quiz/resultCard/ResultCard";
import "./QuizPage.css";

interface Props {}

export type countryDetails = {
  name: string;
  flag: string;
  capital: string;
};

const QuizPage = (props: Props) => {
  const {
    setOfCountries: countriesInQuestion,
    answerCountry,
    questionType,
  } = useQuiz(`https://restcountries.eu/rest/v2/all?fields=name;capital;flag`);

  const [triggerForRerender, setTriggerForRerender] = useState<number>(0);

  const updateTrigger = () => {
    setTriggerForRerender(triggerForRerender + 1);
  };

  return (
    <div className="container">
      <p className="heading">Country Quiz</p>
        <QuizCard
          countriesInQuestion={countriesInQuestion}
          answerCountry={answerCountry}
          questionType={questionType}
          updateTrigger={updateTrigger}
        />
      <Footer />
    </div>
  );
};

export default QuizPage;
