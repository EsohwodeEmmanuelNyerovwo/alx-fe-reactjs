// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {

  return (
    <>
      <Router>
        <div>
          <h1>GitHub User Search App</h1>

          <Routes>
            {/* <Route path="/" element={<h2>Welcome!.</h2>} /> */}
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
