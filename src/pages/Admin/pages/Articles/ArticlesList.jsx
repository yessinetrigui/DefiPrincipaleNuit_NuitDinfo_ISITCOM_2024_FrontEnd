import React from 'react'
import SidebarCustom from '../../../../components/SidebarCustom/SidebarCustom'

 
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
    const handleLoadData  = () =>{
      axios.get("http://35.180.34.14:8080/article/all")
          .then(response => setArticles(response.data))
          .catch(error => console.error("Error fetching articles:", error));
    }
  useEffect(() => {
    handleLoadData()
  }, []);

  const handleDelete = (id) => {
     axios.delete("http://35.180.34.14:8080/article/"+id)
      .then(() => handleLoadData())
      .catch(error => console.error("Error creating article:", error));
  };
  return (
    <div className='flex'>
      <SidebarCustom/>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Articles</h1>
        <Link to="/admin/articles/create" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
          Ajout Article
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {articles.map(article => (
            <div key={article._id} className="p-4 border rounded shadow">
              <h2 className="font-semibold text-lg">{article.title}</h2>
              <p>{article.description}</p>
              <div className="mt-2">
                <Link to={`/admin/articles/${article._id}`} className="text-blue-500 mr-2">Afficher</Link>
                <Link to={`/admin/articles/${article._id}/edit`} className="text-green-500">Modifier</Link>
                <h1 onClick={()=>{handleDelete(article._id)}}   className="text-red-500 cursor-pointer">Supprimer</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
