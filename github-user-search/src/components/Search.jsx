import React from 'react';
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUsers([]);

        try {
            const data = await fetchUserData({ username, location, minRepos });
            setUsers(data);
        } catch (err) {
            setError("Looks like we can't find users matching these criteria");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border p-2 rounded"
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Search
                </button>
            </form>

            <div className="flex flex-col gap-4">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                {users.length > 0 &&
                    users.map((user) => (
                        <div
                            key={user.id}
                            className="border p-4 rounded flex items-center gap-4"
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                                className="w-16 h-16 rounded-full"
                            />
                            <div>
                                <h3 className="font-bold">{user.login}</h3>
                                <p>Location: {user.location || "N/A"}</p>
                                <p>Repos: {user.public_repos}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    className="text-blue-600 hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};


export default Search