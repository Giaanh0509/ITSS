import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm';
import './Register.css';

const Title = () => (
  <h1 className="title">会員登録</h1>
);

const Register = () => (
  <div className="Register">
    <Title />
    <RegistrationForm />
  </div>
);

export default Register;
