import React from "react";
import Film from "./Film";

class FilmsList extends React.Component {
    render() {
        const dataFilms = [
            {
                id: "1",
                name: "Inception"
            },
            {
                id: "2",
                name: "Avengers"
            },
            {
                id: "3",
                name: "Reservoir dogs"
            },
            {
                id: "4",
                name: "Kill Bill"
            }
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

export default FilmsList;
