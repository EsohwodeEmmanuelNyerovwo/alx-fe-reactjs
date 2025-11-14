import React from 'react'
import { useRecipeStore } from '../store/recipeStore'
import { useNavigate } from 'react-router-dom'


export default function DeleteRecipeButton({ recipeId, afterDelete }) {
    const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)
    const navigate = useNavigate()


    function handleDelete() {
        const ok = window.confirm('Are you sure you want to delete this recipe?')
        if (!ok) return


        deleteRecipe(recipeId)


        if (typeof afterDelete === 'function') {
            afterDelete()
        } else {
            navigate('/recipes')
        }
    }


    return (
        <button onClick={handleDelete} className="px-3 py-2 border rounded bg-red-50">Delete</button>
    )
}