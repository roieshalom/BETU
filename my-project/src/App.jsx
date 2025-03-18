import React, { useState, useEffect } from "react";
import "./App.css"; 

const App = () => {
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);

    useEffect(() => {
        fetch("/BETU/questions.json")  // ✅ Fetch from the public folder
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setQuestions(data))
            .catch((error) => console.error("Error loading questions:", error));
    }, []);

    if (questions.length === 0) {
        return <h1>Loading questions...</h1>;
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

    const resetState = () => {
        setSelectedAnswer(null);
        setIsAnswered(false);
    };

    return (
        <div className="wrapper">
            <h1 className="page-title">Leben in Deutschland Fragenkatalog</h1>
            
            <div className="flashcard-container">
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
                </div>
            </div>
            
            <div className="controls">
                <button onClick={prevQuestion}>⬅ Zurück</button>
                <button onClick={nextQuestion}>Weiter ➡</button>
            </div>

            <div className="question-info">
                <div className="question-number">#{currentIndex + 1}</div>
                <div className="question-count">{questions.length} insgesamt</div>
            </div>
        </div>
    );
};

export default App;
