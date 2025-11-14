import { create } from "zustand"
import { nanoid } from 'nanoid'

const useRecipeStore = create(set => ({
    // recipes: [],
    // addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    // setRecipes: (recipes) => set({ recipes }),
    recipes: [],
    favorites: [],
    addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
    removeFavorite: (recipeId) => set(state => ({
        favorites: state.favorites.filter(id => id !== recipeId)
    })),
    recommendations: [],
    generateRecommendations: () => set(state => {
        // Mock implementation based on favorites
        const recommended = state.recipes.filter(recipe =>
            state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),
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