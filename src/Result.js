import Button from "./Button";

export default function Result({ onCheck, answer, isCorrect, correctAnswer }) {
    return (
        <div className="result">
            <p className={isCorrect === true ? "correct" : ""}>
                {isCorrect === true ? (
                    "Correct ✔"
                ) : isCorrect === false ? (
                    <>
                        Wrong 🙁, It's <b>{correctAnswer}</b>
                    </>
                ) : (
                    ""
                )}
            </p>
            <Button onClick={() => onCheck(answer)}>Submit</Button>
        </div>
    );
}
