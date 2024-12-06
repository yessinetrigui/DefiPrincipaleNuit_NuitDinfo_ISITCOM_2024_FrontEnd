 import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'
 


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ArticleEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [category, setCategory] = useState("0");

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    axios.get(`http://35.180.34.14:8080/article/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setcontent(response.data.content);
      })
      .catch(error => console.error("Error fetching article:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`/api/article/${id}`, { title, content })
      .then(() => navigate("http://35.180.34.14:8080/article/all"))
      .catch(error => console.error("Error updating article:", error));
  };

  return (
    <div className='flex'>
        <SidebarCustom/>
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">modifier Article</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Titre</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Contenu</label>
              <textarea 
                value={content} 
                onChange={(e) => setcontent(e.target.value)} 
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Categorie</label>
              <select
                    id="category"
                    name="category"
                    value={category}
                    onChange={handleCategory}
                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                    <option value="0">Ventre</option>
                    <option value="1">Poumon</option>
                </select>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Modifier
            </button>
          </form>
        </div>
    </div>
  );
};

export default ArticleEdit;
