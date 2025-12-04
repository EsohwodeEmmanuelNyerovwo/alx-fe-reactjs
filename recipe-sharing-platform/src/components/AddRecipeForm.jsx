import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        let validationErrors = {};
        if (!title.trim()) validationErrors.title = 'Title is required';
        if (!ingredients.trim()) validationErrors.ingredients = 'Ingredients are required';
        if (!instructions.trim()) validationErrors.instructions = 'Instructions are required';

        if (ingredients.split(',').length < 2) {
            validationErrors.ingredients = 'Enter at least two ingredients, separated by commas';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        const newRecipe = {
            id: Date.now(),
            title: title.trim(),
            summary: instructions.split('\n')[0] || title.trim(),
            image: 'https://picsum.photos/300/200',
            ingredients: ingredients.split(',').map(i => i.trim()),
            instructions: instructions.split('\n').map(i => i.trim())
        }

        console.log('New recipe submitted', newRecipe);

        setTitle('');
        setIngredients('');
        setInstructions('');
        setErrors({});
        alert('Recipe submitted successfully');
    };

    return (
        <div className='max-w-2xl mx-auto bg-white shadow rounded-lg p-6 mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Add New Recipe</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor="" className='block font-semibold mb-1'>Recipe Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue ${errors.title ? 'border-red-500' : 'border-gray-300'}`} placeholder='Enter recipe title' />
                    {errors.title && <p className='text-red-500 text-sm mt-1'>{errors.title}</p>}
                </div>
                <div>
                    <label htmlFor="" className='block font-semibold mb-1'>Ingredients (comma separated)</label>
                    <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue ${errors.ingredients ? 'border-red-500' : 'border-gray-300'}`} rows="3" placeholder='e.g., 2 eggs, 100g flour, 1 tsp salt' />
                    {errors.ingredients && <p>{errors.ingredients}</p>}
                </div>
                <div>
                    <label htmlFor="" className='block font-semibold mb-1'>Preparation Steps (one per line)</label>
                    <textarea value={instructions} onChange={e => setInstructions(e.target.value)} rows="5" className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue ${errors.instructions ? 'border-red-500' : 'border-gray-300'}`} placeholder='Step 1: ...&#10;Step 2:...' />
                    {errors.instructions && <p>{errors.instructions}</p>}
                </div>
                <button type='submit' className='bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition cursor-pointer'>Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipeForm