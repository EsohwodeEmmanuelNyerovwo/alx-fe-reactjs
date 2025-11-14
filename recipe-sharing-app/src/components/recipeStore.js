import { create } from "zustand"

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
    setRecipes: (recipes) => set({ recipes }),
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