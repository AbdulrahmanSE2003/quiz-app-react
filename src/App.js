import { useState } from "react";
import Indicator from "./Indicator";
import Question from "./Question";
import Restart from "./Restart";

export const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: "Paris",
    },
    {
        question:
            "Which programming language is known as the 'mother of all languages'?",
        options: ["C", "Java", "Python", "Assembly"],
        correctAnswer: "C",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correctAnswer: "Jupiter",
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correctAnswer: "Oxygen",
    },
    {
        question: "Who painted the Mona Lisa?",
        options: [
            "Vincent van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Claude Monet",
        ],
        correctAnswer: "Leonardo da Vinci",
    },
    {
        question: "In what year did the Titanic sink?",
        options: ["1910", "1912", "1920", "1930"],
        correctAnswer: "1912",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        correctAnswer: "2",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "William Shakespeare",
            "Charles Dickens",
            "Jane Austen",
            "Mark Twain",
        ],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "South Korea", "Japan", "Thailand"],
        correctAnswer: "Japan",
    },
];

export default function App() {
    const [step, setStep] = useState(0);
    const [questions] = useState(quizQuestions);
    const [isCorrect, setIsCorrect] = useState(null);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    function handleQuestion() {
        if (step < quizQuestions.length - 1) {
            setStep((st) => st + 1);
            setIsCorrect(null);
        } else {
            setIsFinished(true);
        }
    }
    function handleRestart() {
        setStep(0);
        setIsFinished(false);
        setIsCorrect(null);
    }

    return (
        <div className="app">
            <Indicator length={quizQuestions.length} step={step} />
            {!isFinished ? (
                <Question
                    question={questions[step]}
                    onNext={handleQuestion}
                    setIsCorrect={setIsCorrect}
                    isCorrect={isCorrect}
                    setCorrectAnswers={setCorrectAnswers}
                />
            ) : (
                <Restart
                    correctAnswers={correctAnswers}
                    onRestart={handleRestart}
                />
            )}
        </div>
    );
}
