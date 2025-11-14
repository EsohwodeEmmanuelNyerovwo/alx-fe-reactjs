import React from 'react'
import { useRecipeStore } from '../store/recipeStore'


export default function DeleteRecipeButton({ recipeId, afterDelete }) {
    const deleteRecipe = useRecipeStore((s) => s.deleteRecipe)


    function handleDelete() {
        const ok = window.confirm('Are you sure you want to delete this recipe?')
        if (!ok) return
        deleteRecipe(recipeId)
        if (typeof afterDelete === 'function') afterDelete()
    }


    return (
        <button onClick={handleDelete} className="px-3 py-2 border rounded bg-red-50">Delete</button>
    )
}