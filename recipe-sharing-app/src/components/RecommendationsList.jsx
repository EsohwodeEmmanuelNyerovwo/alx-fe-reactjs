import React, { useEffect } from "react"
import { useRecipeStore } from "./recipeStore"
import { Link } from "react-router-dom"

export default function RecommendationsList() {
    const recommendations = useRecipeStore((s) => s.recommendations)
    const generateRecommendations = useRecipeStore((s) => s.generateRecommendations)

    useEffect(() => {
        generateRecommendations()
    }, [])

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold">Recommended for You</h2>

            {recommendations.length === 0 && <p>No recommendations yet.</p>}

            <ul className="mt-4 space-y-3">
                {recommendations.map((r) => (
                    <li key={r.id} className="p-3 border rounded">
                        <Link to={`/recipes/${r.id}`} className="font-semibold">
                            {r.title}
                        </Link>
                        <p>{r.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}