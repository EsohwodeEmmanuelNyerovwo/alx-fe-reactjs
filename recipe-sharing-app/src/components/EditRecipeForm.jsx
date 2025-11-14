import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useRecipeStore } from './recipeStore'


export default function EditRecipeForm() {
    const { id } = useParams()
    const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id))
    const updateRecipe = useRecipeStore((s) => s.updateRecipe)
    const navigate = useNavigate()


    const [form, setForm] = useState(() => ({
        title: recipe?.title || '',
        description: recipe?.description || '',
        ingredients: (recipe?.ingredients || []).join(', '),
        steps: (recipe?.steps || []).join('\n'),
    }))


    if (!recipe) return <div className="p-6">Recipe not found</div>


    function handleChange(event) {
        const { name, value } = event.target
        setForm((f) => ({ ...f, [name]: value }))
    }


    function handleSubmit(event) {
        event.preventDefault()
        const updates = {
            title: form.title,
            description: form.description,
            ingredients: form.ingredients.split(',').map((s) => s.trim()).filter(Boolean),
            steps: form.steps.split(/\r?\n/).map((s) => s.trim()).filter(Boolean),
        }


        updateRecipe(id, updates)
        navigate(`/recipes/${id}`)
    }


    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-3xl">
            <h2 className="text-xl font-semibold">Edit Recipe</h2>


            <label className="block mt-4">
                <span className="text-sm">Title</span>
                <input name="title" value={form.title} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
            </label>


            <label className="block mt-4">
                <span className="text-sm">Description</span>
                <textarea name="description" value={form.description} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
            </label>


            <label className="block mt-4">
                <span className="text-sm">Ingredients (comma separated)</span>
                <input name="ingredients" value={form.ingredients} onChange={handleChange} className="w-full mt-1 p-2 border rounded" />
            </label>


            <label className="block mt-4">
                <span className="text-sm">Steps (one per line)</span>
                <textarea name="steps" value={form.steps} onChange={handleChange} className="w-full mt-1 p-2 border rounded" rows={6} />
            </label>


            <div className="mt-4 flex gap-3">
                <button type="submit" className="px-4 py-2 border rounded">Save</button>
                <button type="button" className="px-4 py-2 border rounded" onClick={() => navigate(-1)}>Cancel</button>
            </div>
        </form>
    )
}