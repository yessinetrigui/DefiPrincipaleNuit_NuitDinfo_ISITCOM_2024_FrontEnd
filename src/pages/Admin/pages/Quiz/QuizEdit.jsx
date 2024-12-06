import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const QuizEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    questionText: "",
    options: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ],
  });

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const response = await axios.get(`http://35.180.34.14:8080/quiz/${id}`);
      setForm({
        questionText: response.data.question.questionText,
        options: response.data.question.options,
      });
    } catch (error) {
      console.error("Error fetching quiz:", error);
    }
  };

  const handleInputChange = (e, index) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      const updatedOptions = [...form.options];
      updatedOptions[index].isCorrect = checked;
      setForm({ ...form, options: updatedOptions });
    } else if (name === "questionText") {
      setForm({ ...form, questionText: value });
    } else {
      const updatedOptions = [...form.options];
      updatedOptions[index].text = value;
      setForm({ ...form, options: updatedOptions });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/quiz/${id}`, { question: { questionText: form.questionText, options: form.options } });
      navigate("/quizzes");
    } catch (error) {
      console.error("Error updating quiz:", error);
    }
  };

  return (
   <div className='flex'>
    <SidebarCustom/>
     <div className="p-4">
       <h1 className="text-2xl font-bold mb-4">Modifier Quiz</h1>
       <form onSubmit={handleSubmit} className="space-y-4">
         <div>
           <label className="block text-sm font-medium">Question</label>
           <input
             type="text"
             name="questionText"
             value={form.questionText}
             onChange={handleInputChange}
             className="block w-full border rounded p-2"
             required
           />
         </div>
         {form.options.map((option, index) => (
           <div key={index} className="flex items-center space-x-2">
             <input
               type="text"
               value={option.text}
               onChange={(e) => handleInputChange(e, index)}
               className="block w-3/4 border rounded p-2"
               placeholder={`Option ${index + 1}`}
               required
             />
             <label>
               <input
                 type="checkbox"
                 checked={option.isCorrect}
                 onChange={(e) => handleInputChange(e, index)}
               />
               Correcte
             </label>
           </div>
         ))}
         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
           Modifier Quiz
         </button>
       </form>
     </div>
   </div>
  );
};

export default QuizEdit;
