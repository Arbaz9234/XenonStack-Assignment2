import React, { useState } from "react";

export const Contactus = (props) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [comment,setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="auth-form-container">
            <h2>Contact US</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="abc@xyz.com" id="email" name="email" />
            <label htmlFor="comment">Comment</label>
            <input value={comment} onChange={(e) => setComment(e.target.value)} type="text" placeholder="Enter your query" id="comment" name="comment" />
            
            <button type="submit" onClick={()=>props.onFormSwitch('CommentAdded') }>Submit</button>
        </form>
    </div>
    )
}
