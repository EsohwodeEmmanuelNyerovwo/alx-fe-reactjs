import React from 'react'
import { useRecipeStore } from '.recipeStore'


export default function SearchBar() {
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm)
    const filterRecipes = useRecipeStore((state) => state.filterRecipes)


    function handleChange(event) {
        setSearchTerm(event.target.value)
        filterRecipes()
    }

    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={handleChange}
        />
    )
}