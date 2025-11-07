import React, { useState } from 'react'

function Contact() {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted!');
    };

    return (
        <div>
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={FormData.name} name='name' placeholder='Your Name' onChange={handleChange} style={{ display: 'block', margin: '10px 0' }} />
                <input type="email" name='email' placeholder='Your Email' value={FormData.email} onChange={handleChange} style={{ display: 'block', margin: '10px 0' }} />
                <textarea name="message" placeholder="Your Message" value={FormData.message} onChange={handleChange} style={{ display: 'block', margin: '10px 0' }} />
                <button type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact