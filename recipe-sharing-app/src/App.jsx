import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import { useRecipeStore } from './recipeStore'


function RecipesList() {
  const recipes = useRecipeStore((s) => s.recipes)


  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((r) => (
          <li key={r.id}>
            <Link to={`/recipes/${r.id}`}>{r.title}</Link>
            <Link to="/favorites" className="text-sm">Favorites</Link>
            <Link to="/recommendations" className="text-sm ml-4">Recommended</Link>
            <p>{r.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default function App() {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/recipes">RecipeShare</Link>
          <Link to="/recipes">All recipes</Link>
        </nav>
      </header>


      <main>
        <Routes>
          <Route path="/recipes" element={<RecipesList />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes/:id/edit" element={<EditRecipeForm />} />
          <Route path="/" element={<RecipesList />} />
        </Routes>
      </main>
    </Router>
  )
}
// import './App.css'
// import AddRecipeForm from './components/AddRecipeForm'
// import RecipeList from './components/RecipeList'

// function App() {

//   return (
//     <>
//       <RecipeList />
//       <AddRecipeForm />
//     </>
//   )
// }

// export default App
