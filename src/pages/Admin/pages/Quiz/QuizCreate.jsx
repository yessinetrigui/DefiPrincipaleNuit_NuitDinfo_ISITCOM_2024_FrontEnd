 import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'
 



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const QuizCreate = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    questionText: "",
    options: [
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
      { text: "", isCorrect: false },
    ],
  });
  const [categories, setcategories] = useState("0");

  const handlecategories = (e) => {
    setcategories(e.target.value);
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
      await axios.post("http://35.180.34.14:8080/quiz/create", { question: { questionText: form.questionText, options: form.options }, categories});
      navigate("/admin/quiz");
    } catch (error) {
      console.error("Error creating quiz:", error);
    }
  };

  return (
    <div className='flex'>
      <SidebarCustom/>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Nouvelle Quiz</h1>
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
          <div>
              <label className="block text-sm font-medium">categories</label>
              <select
                    id="categories"
                    name="categories"
                    value={categories}
                    onChange={handlecategories}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                    <option value="0">Ventre</option>
                    <option value="1">Poumon</option>
                </select>
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
                Correct
              </label>
            </div>
          ))}
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
            Create Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuizCreate;
