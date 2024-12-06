import React from 'react';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import { Footer } from "flowbite-react"; // Import Home component
import ArticlesList from './pages/Admin/pages/Articles/ArticlesList';
import ArticleCreate from './pages/Admin/pages/Articles/ArticleCreate';
import ArticleEdit from './pages/Admin/pages/Articles/ArticleEdit';
import ArticleDetails from './pages/Admin/pages/Articles/ArticleDetails';
import QuizList from './pages/Admin/pages/Quiz/QuizList';
import QuizCreate from './pages/Admin/pages/Quiz/QuizCreate';
import QuizEdit from './pages/Admin/pages/Quiz/QuizEdit';
import QuizDetails from './pages/Admin/pages/Quiz/QuizDetails';
import { BrowserRouter, Route ,Routes } from 'react-router-dom';
import Client from './Client';
import Auth from './pages/Admin/Auth';


const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Client/>}></Route>
      {/* Article Routes */}
      <Route path="/admin/articles" element={<ArticlesList />} />
        <Route path="/admin/articles/create" element={<ArticleCreate />} />
        <Route path="/admin/articles/:id/edit" element={<ArticleEdit />} />
        <Route path="/admin/articles/:id" element={<ArticleDetails />} />
        
        {/* Quiz Routes */}
        <Route path="/admin/login" element={<Auth />} />
        <Route path="/admin/quiz" element={<QuizList />} />
        <Route path="/admin/quiz/create" element={<QuizCreate />} />
        <Route path="/admin/quiz/:id/edit" element={<QuizEdit />} />
        <Route path="/admin/quiz/:id" element={<QuizDetails />} />
      
     </Routes>
       
      </BrowserRouter>
   
  );
};

export default App;
