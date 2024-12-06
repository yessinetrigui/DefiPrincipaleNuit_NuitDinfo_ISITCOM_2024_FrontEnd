import React from 'react'
import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'

 
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [quizzes, setquizzes] = useState([]);
    const handleLoadData  = () =>{
      axios.get("http://35.180.34.14:8080/quiz/all")
          .then(response => setquizzes(response.data))
          .catch(error => console.error("Error fetching quizzes:", error));
    }
  useEffect(() => {
    handleLoadData()
  }, []);

  const handleDelete = (id) => {
     axios.delete("http://35.180.34.14:8080/quiz/"+id)
      .then(() => handleLoadData())
      .catch(error => console.error("Error creating quiz:", error));
  };
  return (
    <div className='flex'>
      <SidebarCustom/>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">quizzes</h1>
        <Link to="/admin/quiz/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Nouvelle quiz
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quizzes.map(quiz => (
            <div key={quiz._id} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-lg">{quiz.question.questionText}</h2>
              <div className="mt-2">
                <Link to={`/admin/quiz/${quiz._id}`} className="text-blue-500 mr-2">Afficer</Link>
                <Link to={`/admin/quiz/${quiz._id}/edit`} className="text-green-500">Edit</Link>
                <h1 onClick={()=>{handleDelete(quiz._id)}}   className="text-red-500 cursor-pointer">Delete</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizList;
