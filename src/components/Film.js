import React from "react";

export default function Film({ id, name }) {
    return (
        <li className="films-list-item" key={id}>
            {name}
        </li>
    );
}
