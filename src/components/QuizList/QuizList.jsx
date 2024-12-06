import React from 'react';
import { useUserContext } from '../../Context/UserProvider';

const QuizList = () => {
  const { quizzes, loading, error } = useUserContext();

  if (loading) return <p className="text-center text-lg text-gray-500">Loading quizzes...</p>;
  if (error) return <p className="text-center text-lg text-red-600">Error: {error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Quiz List</h1>
      {quizzes.map((quiz) => (
        <div key={quiz._id} className="bg-white shadow-lg rounded-lg p-4 mb-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">{quiz.question.questionText}</h2>
          <ul className="space-y-2">
            {quiz.question.options.map((option) => (
              <li key={option._id} className="flex items-center space-x-3 text-gray-600">
                <span className={`p-2 rounded-full text-sm ${option.isCorrect ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}>
                  {option.text}
                </span>
                {option.isCorrect && (
                  <span className="text-sm text-blue-800">✔️ Correct</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
