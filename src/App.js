import './App.css';
import React from 'react';
import FilmsList from "./components/FilmsList";
import Footer from "./components/Footer";

const header = React.createElement("h1", null, "My first reactJS app");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {header}
        <p>
          Hello world.
        </p>
      </header>
      <FilmsList/>
      <Footer/>
    </div>
  );
}

export default App;
