import React from 'react';
import './App.css';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Photo from "./Components/Photo";

function App() {
  return (
    <div className="App">
      <Header />
      <Photo/>
      <Footer />
    </div>
  );
}

export default App;
