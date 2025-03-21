import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { questions } from "./questions.js"; // ✅ Importing questions

console.log("✅ Questions loaded:", questions); // Debugging step

const FlashcardApp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    if (!questions || questions.length === 0) {
        return <h1>Keine Fragen gefunden. Bitte überprüfe die Datei questions.js</h1>;
    }

    const currentQuestion = questions[currentIndex];

    const handleFlip = () => setIsFlipped(!isFlipped);
    const nextQuestion = () => setCurrentIndex((prev) => (prev + 1) % questions.length);
    const prevQuestion = () => setCurrentIndex((prev) => (prev - 1 + questions.length) % questions.length);
    const randomQuestion = () => setCurrentIndex(Math.floor(Math.random() * questions.length));

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

// Render the React component
const root = ReactDOM.createRoot(document.getElementById("root")); // Ensure "root" is your actual container ID
root.render(<FlashcardApp />);
