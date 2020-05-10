import React from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';
import UserForm from '../components/UserForm';
import Formjson from "../components/Formjson/FormWithjson";

const App = () => (
  <div className='App'>
    <Header />
    <Formjson />
    <Footer /> 
    
  </div>
);

export default App;

