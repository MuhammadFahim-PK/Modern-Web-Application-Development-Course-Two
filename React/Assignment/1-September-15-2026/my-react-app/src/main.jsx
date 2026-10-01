import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/ui/Navigation/navigation.jsx";
import App from "./App.jsx";
import BlogPosts from "./pages/BlogPosts/blogposts.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<BlogPosts />} />
    </Routes>
  </BrowserRouter>
);
