import React, { FormEvent, FormEventHandler, useState } from "react";
import "./doctorloginpage.css";
import { Link } from "react-router-dom";

interface Props {}

const DoctorLoginPage: React.FC = (props: Props) => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify({ emailValue, passwordValue }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={`container mt-5 border p-5 loginContainer`}
    >
      <div className='form-group w-50  emailContainer'>
        <label htmlFor='email'>Email address</label>
        <input
          type='loginEmail'
          className='form-control'
          id='loginEmail'
          aria-describedby='emailHelp'
          placeholder='Enter email'
          name='email'
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
        />
        <small id='emailHelp' className='form-text text-muted'></small>
      </div>
      <div className='form-group w-50 m-auto'>
        <label htmlFor='loginPassword'>Password</label>
        <input
          type='password'
          className='form-control'
          id='loginPassword'
          placeholder='Password'
          name='password'
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button type='submit' className='btn btn-primary d-block ml-auto mt-5'>
          login
        </button>
        <Link to='/register' className='d-block m-auto'>
          Don't have an Account?
        </Link>
      </div>
    </form>
  );
};
export default DoctorLoginPage;
