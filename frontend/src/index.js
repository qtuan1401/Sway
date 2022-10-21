import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUsPage from "./components/pages/AboutUsPage";
import LinksPage from "./components/pages/LinksPage";
import OurModelPage from "./components/pages/OurModelPage";
import ResultsPage from "./components/pages/ResultsPage";
import NoPage from "./components/pages/NoPage";
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<App />}>
  //     <Route path="aboutus" element={<AboutUsPage />} />
  //     <Route path="links" element={<LinksPage />} />
  //     <Route path="ourmodel" element={<OurModelPage />} />
  //     <Route path="results" element={<ResultsPage />} />
  //     <Route path="*" element={<NoPage />} />
  //   </Route>
  // </Routes>
  // </BrowserRouter>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
