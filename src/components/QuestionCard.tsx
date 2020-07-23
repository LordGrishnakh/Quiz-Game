import React from "react";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (props) => {
  return (
    <div>
      <p className="number">
        Question: {props.questionNumber} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }}></p>
      <div>
        {props.answers.map((answer) => (
          <div key={answer + `${Math.random()}`}>
            <button disabled={!!props.userAnswer} value={answer} onClick={props.callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
