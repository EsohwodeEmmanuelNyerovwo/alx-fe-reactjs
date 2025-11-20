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
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Minimum Repositories"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button
                    type="submit"
                >
                    Search
                </button>
            </form>

            <div>
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {users.length > 0 &&
                    users.map((user) => (
                        <div
                            key={user.id}
                        >
                            <img
                                src={user.avatar_url}
                                alt={user.login}
                            />
                            <div>
                                <h3>{user.login}</h3>
                                <p>Location: {user.location || "N/A"}</p>
                                <p>Repos: {user.public_repos}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
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