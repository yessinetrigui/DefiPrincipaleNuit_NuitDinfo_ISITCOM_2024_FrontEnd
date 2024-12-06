import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'
 import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const QuizDetails = () => {
  const { id } = useParams(); // Get the quiz ID from the URL
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch quiz details on component mount
  useEffect(() => {
    const fetchQuizDetails = async () => {
      try {
        const response = await axios.get(`http://35.180.34.14:8080/quiz/${id}`);
        setQuiz(response.data);
      } catch (err) {
        setError("Failed to fetch quiz details.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizDetails();
  }, [id]);

  // Handle navigation back to the quiz list
  const handleBack = () => navigate("/admin/quiz");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='flex'>
      <SidebarCustom/>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Quiz Details</h1>
        {quiz && (
          <div>
            <h2 className="text-lg font-semibold mb-2">Question:</h2>
            <p className="text-gray-700 mb-4">{quiz.question.questionText}</p>
      
            <h3 className="text-lg font-semibold mb-2">Options:</h3>
            <ul className="list-disc list-inside mb-4">
              {quiz.question.options.map((option) => (
                <li
                  key={option._id}
                  className={option.isCorrect ? "text-green-600" : "text-gray-700"}
                >
                  {option.text}
                  {option.isCorrect && <span> (Correct Answer)</span>}
                </li>
              ))}
            </ul>
      
            <h3 className="text-lg font-semibold mb-2">Categories:</h3>
            <p className="text-gray-700 mb-4">
              {quiz.categories == 0 ?  "Ventre" : "Poumon"}
            </p>
      
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retoure
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizDetails;
