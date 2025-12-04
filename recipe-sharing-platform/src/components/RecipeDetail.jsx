import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
    const { id } = useParams();
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        const findItem = data.find(item => item.id === parseInt(id));
        setMenu(findItem);
    }, [id]);

    if (!menu) {
        return <div className='p-6 text-center'>Item not found.</div>
    }
    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <Link to='/' className='text-blue-600 hover:underline'>&larr; Back to Home</Link>
            <div className='max-w-4xl mx-auto bg-white rounded-lg shadow p-6 mt-6'>
                <img src={menu.image} alt={menu.title} className='w-full h-64 object-cover rounded-lg' />
                <h1 className='text-3xl font-bold mb-4'>{menu.title}</h1>
                <p className='text-gray-700 mb-6'>{menu.summary}</p>
                <div className='mb-6'>
                    <h2 className='text-2xl font-semibold mb-2'>Ingredients</h2>
                    <ul className='list-disc list-inside text-gray-700'>
                        {
                            menu.ingredients
                                ? menu.ingredients.map((item, index) => (
                                    <li key={index}>{item}</li>
                                )) : ['No Ingredients Provided.']
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-semibold mb-2'>Instructions</h2>
                    <ol className='list-decimal list-inside text-gray-700 space-y-1'>
                        {menu.instructions
                            ? menu.instructions.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))
                            : ['No Ingredients Provided.']}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail