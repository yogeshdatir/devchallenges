import React, { useState } from "react";
import "./QuizCard.css";
import Icons from "../../../assets/undraw_adventure_4hum 1.svg";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { countryDetails } from "../../pages/QuizPage";
import ResultCard from "../resultCard/ResultCard";

interface Props {
  countriesInQuestion: countryDetails[] | null;
  answerCountry: countryDetails | null;
  questionType: string;
  updateTrigger: () => void;
}

const QuizCard = ({
  countriesInQuestion,
  answerCountry,
  questionType,
  updateTrigger,
}: Props) => {
  const [isQuestionAnswered, setIsQuestionAnswered] = useState<boolean>(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean>(false);
  const [totalResult, setTotalResult] = useState<number>(0);

  const [showResult, setShowResult] = useState<boolean>(false);

  const getAlphabet = (index: number) => {
    switch (index) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";

      default:
        break;
    }
  };

  const getQuestionText = (questionType: string) => {
    if (questionType === "capital")
      return (
        <p className="question">{answerCountry?.capital} is the capital of</p>
      );
    return <p className="question">Which country does this flag belong to?</p>;
  };

  const evaluateAnswer = (e: any, selectedCountryName: string) => {
    if (selectedCountryName === answerCountry?.name) {
      // setTotalResult(totalResult+1);
      setTotalResult(totalResult + 1);

      console.log(totalResult);
      e.target.classList.add(`correct-answer`);
    } else {
      e.target.classList.add(`wrong-answer`);
      Array.from(document.querySelectorAll(`.option-text`)).map((node: any) => {
        if (node.innerText === answerCountry?.name)
          node.parentNode.classList.add(`correct-answer`);
        return null;
      });
    }
  };
  const handleNext = () => {
    if (isAnswerCorrect) {
      document
        .querySelector(`.correct-answer`)
        ?.classList.remove(`correct-answer`);
      document.querySelector(`.wrong-answer`)?.classList.remove(`wrong-answer`);
      setIsQuestionAnswered(false);
      updateTrigger();
    } else {
      setShowResult(true);
    }
  };

  const handleTryAgain = () => {
    setShowResult(false);
    setTotalResult(0);
    updateTrigger();
    setIsQuestionAnswered(false);
  };

  return !showResult ? (
    <div className="card">
      <img src={Icons} alt="pic" className="quiz-img" />

      <img
        className={`flag${questionType === "flag" ? ` display-flag` : ``}`}
        src={answerCountry?.flag || ""}
        alt="flag"
      ></img>

      {getQuestionText(questionType)}
      {countriesInQuestion &&
        countriesInQuestion.map((country: countryDetails, index: number) => (
          <div
            key={index}
            className="option"
            onClick={(e: any) => {
              if (isQuestionAnswered) return;
              setIsQuestionAnswered(true);
              setIsAnswerCorrect(country.name === answerCountry?.name);
              evaluateAnswer(e, country.name);
            }}
          >
            <span
              className={`alphabet`}
              onClick={(e: any) => {
                e.stopPropagation();
                e.target.parentElement.click();
              }}
            >
              {getAlphabet(index)}
            </span>
            <span
              className={`option-text`}
              onClick={(e: any) => {
                console.log(e);
                e.stopPropagation();
                e.target.parentElement.click();
              }}
            >
              {country.name}
            </span>
            <CheckCircleOutlineIcon className={`correct-answer-icon`} />
            <HighlightOffIcon className={`wrong-answer-icon`} />
          </div>
        ))}
      {isQuestionAnswered && (
        <button className={`next-cta`} onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  ) : (
    <ResultCard totalResult={totalResult} handleTryAgain={handleTryAgain} />
  );
};

export default QuizCard;
