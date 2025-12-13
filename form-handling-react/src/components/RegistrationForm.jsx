import React, { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [error, setError] = useState("");


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }


        setError("");


        // Mock API call
        console.log("Submitting data:", { username, email, password });
        alert("User registered successfully (Controlled Form)");
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Register (Controlled)</h2>


            {error && <p style={{ color: "red" }}>{error}</p>}


            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
            />


            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
            />


            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
            />


            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm