import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '', email: '', password: ''
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();


        const { username, email, password } = formData;


        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }


        setError("");


        // Mock API call
        console.log("Submitting data:", formData);
        alert("User registered successfully (Controlled Form)");
    };
    return (
        <div>
            <form>
                <h2>Register (Controlled)</h2>


                {error && <p style={{ color: "red" }}>{error}</p>}


                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />


                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />


                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegistrationForm