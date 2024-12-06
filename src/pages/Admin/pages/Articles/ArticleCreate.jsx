 import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'
 
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ArticleCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");
  const [category, setCategory] = useState("0");
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://35.180.34.14:8080/article/create", { title, content, category })
      .then(() => navigate("/admin/articles"))
      .catch(error => console.error("Error creating article:", error));
  };

  return (
    <div className='flex'>
      <SidebarCustom/>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Nouvelle Article</h1>
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
              <label className="block text-sm font-medium">Categories</label>
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
            Ok
          </button>
        </form>
      </div>
    </div>
  );
};

export default ArticleCreate;
