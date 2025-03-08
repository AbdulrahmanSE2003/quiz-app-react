import { useState } from "react";
import Control from "./Control";
import Result from "./Result";
import Options from "./Options";

export default function Question({
    question,
    onNext,
    setIsCorrect,
    isCorrect,
    setCorrectAnswers,
}) {
    const [selectOPt, setOpt] = useState("");

    function handleAnswer(answer) {
        if (!answer) return;

        if (answer === question.correctAnswer) {
            setCorrectAnswers((ca) => ca + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    return (
        <>
            <div className="question">
                <h3>{question.question}</h3>
                <ul>
                    <Options
                        options={question.options}
                        selectOPt={selectOPt}
                        setOpt={setOpt}
                        isCorrect={isCorrect}
                    />
                </ul>
                <Result
                    onCheck={handleAnswer}
                    answer={selectOPt}
                    isCorrect={isCorrect}
                    correctAnswer={question.correctAnswer}
                />
                <Control onNext={onNext} />
            </div>
        </>
    );
}
