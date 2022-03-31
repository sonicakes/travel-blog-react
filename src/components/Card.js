import React from 'react';

export default function Card (props) {
    return (
        <div className="card">
            <img src={props.card.imageUrl}></img>
            <div>
                <div>{props.card.location}</div> <span>View on Google Maps</span>
            </div>
            <h1>{props.card.title}</h1>
            <div>{props.card.startDate} - {props.card.endDate}</div>
            <p>{props.card.description}</p>
        </div>
    )
}