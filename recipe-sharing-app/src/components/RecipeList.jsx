import useRecipeStore from "./recipeStore";
import React from "react"
import { Link } from "react-router-dom"
import { useRecipeStore } from "./recipeStore"
import SearchBar from "./SearchBar"


export default function RecipeList() {
    const recipes = useRecipeStore((s) =>
        s.searchTerm ? s.filteredRecipes : s.recipes
    )


    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">Recipes</h1>


            <SearchBar />


            <ul className="mt-4 space-y-3">
                {recipes.map((r) => (
                    <li key={r.id} className="p-3 border rounded">
                        <Link to={`/recipes/${r.id}`} className="font-semibold">
                            {r.title}
                        </Link>
                        <p className="text-sm">{r.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

// function RecipesList() {
//     const recipes = useRecipeStore((s) =>
//         s.searchTerm ? s.filteredRecipes : s.recipes
//     );

//     return (
//         <div className="p-6">
//             <h1 className="text-2xl font-bold">Recipes</h1>

//             {/* Search Bar */}
//             <SearchBar />

//             <ul className="mt-4 space-y-3">
//                 {recipes.map((r) => (
//                     <li key={r.id} className="p-3 border rounded">
//                         <Link to={`/recipes/${r.id}`} className="font-semibold">
//                             {r.title}
//                         </Link>
//                         <p className="text-sm">{r.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
// import useRecipeStore from "./recipeStore";

// const RecipeList = () => {
//     const recipes = useRecipeStore(state => state.recipes);

//     return (
//         <div>
//             {
//                 recipes.map(recipe => (
//                     <div key={recipe.id}>
//                         <h3>{recipe.title}</h3>
//                         <p>{recipe.description}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     );
// };
// export default RecipeList;