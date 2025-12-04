import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = e => {
        e.preventDefault();

        if (!title || !ingredients || !steps) {
            setErrors("All fields are required.");
            return;
        }

        const newRecipe = {
            id: Date.now(),
            title,
            ingredients: ingredients.split('\n'),
            steps: steps.split('\n')
        };

        console.log('New recipe submitted', newRecipe);

        setTitle('');
        setIngredients('');
        setSteps('');
        setErrors({});
        alert('Recipe submitted successfully');
    };

    return (
        <div className='max-w-2xl mx-auto bg-white shadow rounded-lg p-6 mt-6'>
            <h2 className='text-2xl font-bold mb-4'>Add New Recipe</h2>
            {error && (
                <p className="text-red-500 mb-3">{error}</p>
            )}
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label className="block font-medium mb-1">Recipe Title</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Ingredients (one per line)</label>
                    <textarea
                        className="w-full border p-2 rounded h-32"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter ingredients..."
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
                    <textarea
                        className="w-full border p-2 rounded h-32"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter steps..."
                    ></textarea>
                </div>
                <button type='submit' className='bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition cursor-pointer'>Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipeForm