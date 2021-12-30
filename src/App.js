import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import About from './Components/About/About';
import Contents from './Components/Batches/Batches';

const App = () => {
  return (
    <>
      <NavBar/>
      <Main/>
      <About/>
      <Contents/>
    </>
  )
}

export default App;
