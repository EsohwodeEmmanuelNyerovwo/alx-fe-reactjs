import React, { useState } from 'react'

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [steps, setSteps] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        if (!title.trim()) return "Title is required.";
        if (!ingredients.trim()) return "Ingredients are required.";
        if (!steps.trim()) return "Preparation steps are required.";

        const ingredientList = ingredients.split('\n').filter(i => i.trim() !== "");
        if (ingredientList.length < 2) return "Please enter at least 2 ingredients.";

        return ""; // no errors
    };

    const handleSubmit = e => {
        e.preventDefault();

        const errMsg = validate(); // call validate()

        if (errMsg) {
            setErrors(errMsg);
            return;
        }
        // if (!title || !ingredients || !steps) {
        //     setErrors("All fields are required.");
        //     return;
        // }

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
        <div className='max-w-xl md:max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-6'>
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>Add New Recipe</h2>
            {error && (
                <p className="text-red-500 mb-3">{error}</p>
            )}
            <form onSubmit={handleSubmit} className='space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className="col-span-1 md:col-span-2">
                    <label className="block font-medium mb-1">Recipe Title</label>
                    <input
                        type="text"
                        className="w-full border p-2 rounded"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter recipe title"
                    />
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block font-medium mb-1">Ingredients (one per line)</label>
                    <textarea
                        className="w-full border p-2 rounded h-32"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder="Enter ingredients..."
                    ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <label className="block font-medium mb-1">Preparation Steps (one per line)</label>
                    <textarea
                        className="w-full border p-2 rounded h-32"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        placeholder="Enter steps..."
                    ></textarea>
                </div>
                <button type='submit' className='bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition cursor-pointer col-span-1 md:col-span-2'>Add Recipe</button>
            </form>
        </div>
    )
}

export default AddRecipeForm