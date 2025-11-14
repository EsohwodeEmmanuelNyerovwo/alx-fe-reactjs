import React from 'react'
import DeleteRecipeButton from './DeleteRecipeButton'
import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'

export default function RecipeDetails() {
    const { id } = useParams()
    const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
    const navigate = useNavigate()


    if (!recipe) return (
        <div>
            <h2>Recipe not found</h2>
            <button onClick={() => navigate('/recipes')}>Back to list</button>
        </div>
    )


    return (
        <div>
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>


            <section>
                <h3>Ingredients</h3>
                <ul>
                    {recipe.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
            </section>


            <section>
                <h3>Steps</h3>
                <ol>
                    {recipe.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </section>


            <div>
                <Link to={`/recipes/${id}/edit`}>Edit</Link>
                <DeleteRecipeButton recipeId={id} afterDelete={() => navigate('/recipes')} />
                <Link to="/recipes">Back</Link>
            </div>
        </div>
    )
}