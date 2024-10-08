import React from 'react'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios'

const Login = () => {
const [formData, setFormData] = useState({
  email:'',
  password:''
});
const { email, password} = formData;
const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});
const onSubmit = async e =>{
  e.preventDefault();
    console.log("success")
}

  return (
    <Fragment>
      <section className='container'>
     <h1 className="large text-primary">Log In</h1>
      <p className="lead"><i className="fas fa-user"></i> Log Into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email}
          onChange = { e => onChange(e)} required />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange = { e => onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Do not have an account? <Link to ="/register">Sign Up</Link>
      </p>
      </section>
    </Fragment>
  )
}

export default Login
