import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import Footer from "./pages/Footer";
import { ThemeProvider, useTheme } from './assets/ThemeContext';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`max-h-fit min-w-fit min-h-screen p-10 ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
