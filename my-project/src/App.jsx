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
    const [isFlipped, setIsFlipped] = useState(false);

    const currentQuestion = questions[currentIndex];

    const handleFlip = () => setIsFlipped(!isFlipped);
    const nextQuestion = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % questions.length);
    };
    const prevQuestion = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
    };
    const randomQuestion = () => {
        setIsFlipped(false);
        setCurrentIndex(Math.floor(Math.random() * questions.length));
    };

    return (
        <div className="container">
            <h1>Berlin Citizenship Flashcards</h1>
            <div className="question-count">Fragen: {questions.length}</div>

            <div className={`flashcard ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
                <div className="front">{currentQuestion.question}</div>
                <div className="back">{currentQuestion.correct_answer}</div>
            </div>

            <div className="controls">
                <button onClick={prevQuestion}>⬅ Zurück</button>
                <button onClick={randomQuestion}>🔀 Zufällig</button>
                <button onClick={nextQuestion}>Weiter ➡</button>
            </div>
        </div>
    );
};

export default App;
