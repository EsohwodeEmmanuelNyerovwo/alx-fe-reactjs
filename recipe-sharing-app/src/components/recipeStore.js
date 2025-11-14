import { create } from "zustand"
import { nanoid } from 'nanoid'

const useRecipeStore = create(set => ({
    // recipes: [],
    // addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    // setRecipes: (recipes) => set({ recipes }),
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),


    filteredRecipes: [],
    filterRecipes: () =>
        set((state) => ({
            filteredRecipes: state.recipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
            ),
        })),

    // Add a new recipe
    addRecipe: (recipe) =>
        set((state) => ({
            recipes: [...state.recipes, { id: nanoid(), ...recipe }],
        })),
    // Update existing recipe by id
    updateRecipe: (id, updates) =>
        set((state) => ({
            recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
        })),


    // Delete recipe by id
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((r) => r.id !== id),
        })),
}));
export default useRecipeStore;