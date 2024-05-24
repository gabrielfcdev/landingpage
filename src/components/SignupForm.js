import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        name,
        email
      });
      setMessage('Inscrição realizada com sucesso!');
      setSuccess(true);
    } catch (error) {
        setMessage('Erro ao enviar o formulario');
        setSuccess(false);
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </label>
      <button type="submit">Sign Up</button>
      {message &&(
        <p style={{color: success? 'green' : 'red'}}>
          {message}
        </p>
      )}
    </form>
  );
};

export default SignupForm;
