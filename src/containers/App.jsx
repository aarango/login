import React from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UserForm from '../components/UserForm';
const App = () => (
  <div className='App'>
    <Header />
    <UserForm />  
    <Footer /> 
    
  </div>
);

export default App;

