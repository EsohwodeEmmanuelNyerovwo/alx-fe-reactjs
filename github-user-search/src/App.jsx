// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div>
          <h1>GitHub User Search App</h1>

          <Routes>
            <Route path="/" element={<h2>Welcome!.</h2>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
