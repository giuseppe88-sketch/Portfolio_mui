import "./App.css";
// import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogPostDetail from './components/BlogPostDetails';
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/blog/:id" element={<BlogPostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
