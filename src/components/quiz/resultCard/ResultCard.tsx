import React from 'react'
import './ResultCard.css'
import Icons from "../../../assets/undraw_winners_ao2o 2.svg";

interface Props {
  totalResult: number;
  handleTryAgain: () => void;
}

const ResultCard = ({ totalResult, handleTryAgain }: Props) => {
  return (
    <div className="card column-center">
      <img src={Icons} alt="pic" className="result-img" />
      <p className={`result-heading`}>Results</p>
      <p className="result-text">
        You got <span>{totalResult}</span> correct answers
      </p>
      <button className="try-again-cta" onClick={handleTryAgain}>
        Try again
      </button>
    </div>
  );
};

export default ResultCard
