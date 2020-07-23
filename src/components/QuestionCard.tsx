import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

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
    <Wrapper>
      <p className="number">
        Question: {props.questionNumber} / {props.totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: props.question }}></p>
      <div>
        {props.answers.map((answer) => (
          <ButtonWrapper
            correct={props.userAnswer?.correctAnswer === answer}
            userClicked={props.userAnswer?.answer === answer}
            key={answer + `${Math.random()}`}
          >
            <button
              disabled={!!props.userAnswer}
              value={answer}
              onClick={props.callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};

export default QuestionCard;
