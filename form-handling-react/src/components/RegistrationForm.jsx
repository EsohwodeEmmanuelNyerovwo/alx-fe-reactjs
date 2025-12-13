import React, { useState } from 'react'

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "username") setUsername(value);
        if (name === "email") setEmail(value);
        if (name === "password") setPassword(value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();


        const newErrors = {};


        if (!username) newErrors.username = "Username is required";
        if (!email) newErrors.email = "Email is required";
        if (!password) newErrors.password = "Password is required";


        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        // }


        setErrors({});


        // Mock API call
        console.log("Submitting data:", { username, email, password });
        alert("User registered successfully (Controlled Form)");
    };


    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Details:</h2>


            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}


            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}


            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}


            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleChange} />
        </form>
    )
};

export default RegistrationForm