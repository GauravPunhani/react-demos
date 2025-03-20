import React from "react";
import { useState } from "react";
const Form = () => {
    const[formData,setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const[errors, setErrors] = useState({});
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData);
        console.log(newErrors);
        setErrors(newErrors);
    };
    const validateForm = (data) => {
        const errors = {};
        if(!data.username.trim()){
            errors.username = 'Username is required';
        }
        if(!data.email.trim()){
            errors.email = 'Email is required';
        }else if(!/\S+@\S+\.\S+/.test(data.email)){
            errors.email = 'Email is invalid';
        }
        return errors;
    };
    
    return (
        <div className="form-container" onSubmit={handleSubmit}>
        <form>
            <input name="username" type="text" 
            className="form-input" onChange={handleChange}/> 
            {errors.username && <span>{errors.username}</span>}

            <input name="email" type="email" className="form-input" onChange={handleChange}/>
            {errors.email && <span> {errors.email} </span>}

            <input name="password" type="password" className="form-input" onChange={handleChange}></input>
            <button type="submit" className="submit-button" onChange={handleChange}>Register</button>
        </form>
        </div>
    )
}
export default Form