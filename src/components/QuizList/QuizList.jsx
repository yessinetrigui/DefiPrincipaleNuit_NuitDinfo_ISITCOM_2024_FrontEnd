import React, { useState } from 'react';
import { useUserContext } from '../../Context/UserProvider';

const QuizList = () => {
  const { quizzes, loading, error } = useUserContext();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (loading) return <p className="text-center text-lg text-gray-500">Charging  quizzes...</p>;
  if (error) return <p className="text-center text-lg text-red-600">Erreur: {error}</p>;

  // Handle answer selection
  const handleAnswerSelect = (quizId, optionId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [quizId]: optionId,
    }));
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizzes.forEach((quiz) => {
      const correctOption = quiz.question.options.find((option) => option.isCorrect);
      if (correctOption && correctOption._id === selectedAnswers[quiz._id]) {
        score++;
      }
    });
    return score;
  };

  // Handle quiz submission
  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Take the Quiz</h1>

      {showResults ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">Quiz Results</h2>
          <p className="text-lg text-gray-600 mt-4">
            You scored {calculateScore()} out of {quizzes.length}.
          </p>
          <button
            onClick={() => {
              setShowResults(false);
              setSelectedAnswers({});
            }}
            className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Retake Quiz
          </button>
        </div>
      ) : (
        quizzes.map((quiz) => (
          <div
            key={quiz._id}
            className="bg-white shadow-lg rounded-lg p-4 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{quiz.question.questionText}</h2>
            <ul className="space-y-2">
              {quiz.question.options.map((option) => (
                <li
                  key={option._id}
                  className={`p-2 rounded-lg cursor-pointer ${
                    selectedAnswers[quiz._id] === option._id
                      ? option.isCorrect
                        ? 'bg-green-300'
                        : 'bg-red-300'
                      : 'bg-gray-100'
                  }`}
                  onClick={() => handleAnswerSelect(quiz._id, option._id)}
                >
                  {option.text}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      {!showResults && (
        <div className="text-center mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizList;
