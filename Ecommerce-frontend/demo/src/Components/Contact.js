import React, { useState } from 'react';
 

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add code to send the form data to a backend API or perform any other actions
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
