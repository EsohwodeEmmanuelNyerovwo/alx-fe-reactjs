import React, { useEffect, useState } from 'react'
import data from '../data.json';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
    }, []);
    console.log(items);
    return (
        <div className='min-h-screen bg-gray-100 px-4 py-12'>
            <h1 className='text-4xl font-bold text-center mb-10'>Recipe Sharing Platform</h1>
            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                {
                    items.map((item, id) => (
                        <Link key={item.id} to={`/recipe/${item.id}`}>
                            <div className='bg-white rounded-lg shadow hover:shadow-xl transition-all cursor-pointer'>
                                <img src={item.image} alt={item.title} className='w-full h-40 object-cover rounded-t-lg' />
                                <div className='p-5'>
                                    <h2 className='text-xl font-semibold'>{item.title}</h2>
                                    <p className='text-gray-600 mt-2'>{item.summary}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomePage