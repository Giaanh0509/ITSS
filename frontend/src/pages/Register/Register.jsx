import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import RegistrationForm from './RegistrationForm';
import './Register.css';

const Title = () => (
  <h1 className="title">会員登録</h1>
);

const Register = () => (
  <div className="Register">
    <Header />
    <Title />
    <RegistrationForm />
    <Footer />
  </div>
);

export default Register;
