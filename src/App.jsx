import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        fetch("/BETU/questions.json")
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((error) => console.error("Error loading questions:", error));
    }, []);

    if (questions.length === 0) {
        return <div>Loading questions...</div>;
    }

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
