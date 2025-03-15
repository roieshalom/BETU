import React, { useState } from "react";
import "./App.css"; // ✅ Ensure this file exists for styling

const questions = [
    {
        id: 1,
        question: "Wie heißt die deutsche Verfassung?",
        options: ["Volksgesetz", "Bundesgesetz", "Deutsches Gesetz", "Grundgesetz"],
        correct_answer: "Grundgesetz"
    },
    {
        id: 2,
        question: "Wahlen in Deutschland sind frei. Was bedeutet das?",
        options: [
            "Man darf Geld annehmen, wenn man dafür eine bestimmte Partei wählt.",
            "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
            "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch gezwungen werden.",
            "Alle wahlberechtigten Personen müssen wählen."
        ],
        correct_answer: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch gezwungen werden."
    }
];

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleAnswerClick = (option) => {
        if (!isAnswered) {
            setSelectedAnswer(option);
            setIsAnswered(true);
        }
    };

    const nextQuestion = () => {
        resetState();
        setCurrentIndex((prev) => (prev + 1) % questions.length);
    };
    const prevQuestion = () => {
        resetState();
        setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
    };
    const randomQuestion = () => {
        resetState();
        setCurrentIndex(Math.floor(Math.random() * questions.length));
    };

    const resetState = () => {
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    return (
        <div className="wrapper">
            <h1 className="page-title">Leben in Deutschland Fragenkatalog</h1>
            
            <div className="container">
                <div className="flashcard">
                    <div className="question">{currentQuestion.question}</div>
                    <div className="options">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                className={`option-button ${
                                    isAnswered
                                        ? option === currentQuestion.correct_answer
                                            ? "correct"
                                            : option === selectedAnswer
                                            ? "incorrect"
                                            : ""
                                        : ""
                                }`}
                                onClick={() => handleAnswerClick(option)}
                                disabled={isAnswered}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="question-number" style={{ color: "gray" }}>#{currentIndex + 1}</div>
                </div>
            </div>
            
            <div className="controls">
                <button onClick={prevQuestion}>⬅ Zurück</button>
                <button onClick={randomQuestion}>Zufällig</button>
                <button onClick={nextQuestion}>Weiter ➡</button>
            </div>

            <div className="question-count" style={{ color: "lightgray", marginTop: "10px" }}>Fragen insgesamt: {questions.length}</div>
        </div>
    );
};

export default App;
