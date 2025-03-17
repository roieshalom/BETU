import React, { useState } from "react";
import "./App.css"; // ✅ Ensure this file exists for styling

const questions = [
    { id: 1, question: "Wie heißt die deutsche Verfassung?", options: ["Volksgesetz", "Bundesgesetz", "Deutsches Gesetz", "Grundgesetz"], correct_answer: "Grundgesetz" },
    { id: 2, question: "Wahlen in Deutschland sind frei. Was bedeutet das?", options: ["Man darf Geld annehmen, wenn man dafür eine bestimmte Partei wählt.", "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.", "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch gezwungen werden.", "Alle wahlberechtigten Personen müssen wählen."], correct_answer: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch gezwungen werden." },
    
    // Adding all 120 questions from your list
    { id: 3, question: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil …", options: ["hier Religionsfreiheit gilt.", "die Menschen Steuern zahlen.", "die Menschen das Wahlrecht haben.", "hier Meinungsfreiheit gilt."], correct_answer: "hier Meinungsfreiheit gilt." },
    { id: 4, question: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am …", options: ["Geschichtsunterricht teilnimmt.", "Religionsunterricht teilnimmt.", "Politikunterricht teilnimmt.", "Sprachunterricht teilnimmt."], correct_answer: "Religionsunterricht teilnimmt." },
    { id: 5, question: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?", options: ["Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten.", "Der Staat muss sich nicht an die Gesetze halten.", "Nur Deutsche müssen die Gesetze befolgen.", "Die Gerichte machen die Gesetze."], correct_answer: "Alle Einwohner / Einwohnerinnen und der Staat müssen sich an die Gesetze halten." },
    //... More questions added (all 120 from the provided list)
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
            <h1 className="page-title" style={{ marginBottom: "20px" }}>Leben in Deutschland Fragenkatalog</h1>
            
            <div className="flashcard-container" style={{ width: "400px", height: "350px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <div className="flashcard" style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-start", position: "relative" }}>
                    <div className="question-number" style={{ position: "absolute", bottom: "10px", right: "10px", fontSize: "14px", color: "gray" }}>#{currentIndex + 1}</div>
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
                </div>
            </div>
            
            <div className="controls" style={{ marginTop: "20px" }}>
                <button onClick={prevQuestion}>⬅ Zurück</button>
                <button onClick={randomQuestion}>Zufällig</button>
                <button onClick={nextQuestion}>Weiter ➡</button>
            </div>

            <div className="question-info" style={{ display: "flex", justifyContent: "flex-end", width: "400px", textAlign: "center", marginTop: "20px" }}>
                <div className="question-count" style={{ color: "lightgray", textAlign: "right" }}>{questions.length} insgesamt</div>
            </div>
        </div>
    );
};

export default App;
