import './App.css';
import React from 'react';
import FilmsList from "./components/FilmsList";
import Description from "./components/Description";
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
      <Description/>
      <FilmsList/>
      <Footer/>
    </div>
  );
}

export default App;

class FilmsList extends React.Component {
    render() {
        const dataFilms = [
            {
                id: '1',
                name: 'Inception',
            },
            {
                id: '2',
                name: 'Avengers',
            },
            {
                id: '3',
                name: 'Reservoir dogs',
            },
            {
                id: '4',
                name: 'Kill Bill',
            },
        ];
        return (
            <ul className="films-list">
                {dataFilms.map((el) => (
                    <Film key={el.id} name={el.name} />
                ))}
            </ul>
        );
    }
}

function Film({ id, name }) {
    return (
        <li className="films-list-item" key={id}>
            {name}
        </li>
    );
}

class Footer extends React.PureComponent {

    render() {
        return <p className="footer">All right are reserved.</p>
    }
}
