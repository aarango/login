import React from 'react';
import '../assets/styles/App.scss';

import '../components/FormShema';

import Header from '../components/Header';
import Register from '../components/Register';
import Footer from '../components/Footer';
import StepTitle from '../components/StepTitle';
import Steperbar from '../components/StepperBar';
import User from '../components/User';

const App = () => (
  <div className='App'>
    <Header />
    <User />
    <Footer />
  </div>
);

export default App;

