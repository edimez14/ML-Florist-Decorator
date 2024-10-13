// frameworks imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages imports
import { Index } from "./pages/Index";
import { Portfolio } from "./pages/Portfolio";
import { Services } from "./pages/Services";

// styles imports
import "./assets/fonts/font-faces.css";
import "./style/index.css";
import "./style/styles.css";


function App() {

  return (
    <BrowserRouter>
      {/* This code snippet is setting up the routing configuration for a React application using React
      Router. Here's a breakdown of what each part does: */}
      <Routes>
        <Route path="/" element={<Navigate to="/index" />} />
        <Route path="/index" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
