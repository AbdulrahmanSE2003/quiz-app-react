import { quizQuestions } from "./App";
import Button from "./Button";

export default function Restart({ correctAnswers, onRestart }) {
    return (
        <div className="final">
            <h3>🎉 Quiz Completed! 🎉</h3>
            <p>
                You answered{" "}
                <span style={{ color: "red" }}>{correctAnswers}</span> out of{" "}
                {quizQuestions.length} Correctly!
            </p>
            <Button onClick={onRestart} className="next">
                Restart
            </Button>
        </div>
    );
}
