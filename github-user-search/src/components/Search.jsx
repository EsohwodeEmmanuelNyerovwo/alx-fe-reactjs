import React from 'react';
import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault(); // prevent form refresh
        setLoading(true);
        setError("");
        setUserData(null);

        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setError("Looks like we cant find the user");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            <div style={{ marginTop: "20px" }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                {userData && (
                    <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "10px" }}>
                        <img
                            src={userData.avatar_url}
                            alt={userData.login}
                            width={100}
                            style={{ borderRadius: "50%" }}
                        />
                        <h3>{userData.name || userData.login}</h3>
                        <p>
                            <a href={userData.html_url} target="_blank">
                                View GitHub Profile
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search