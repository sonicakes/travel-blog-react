import React from 'react';
import pointer from '../images/location-pin.png'

export default function Card(props) {
    return (
        <div className="card">
            <div className='card__left side'>
                <div className='wrapper-portrait'>
                    <img src={props.card.imageUrl}></img>
                </div>
            </div>

            <div className='card__right side'>
                <div className='info'>
                    <div className='heading'>
                        <div className='location'><img src={pointer}></img>{props.card.location}</div>
                        <a href={props.card.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.card.title}</h1>
                    <div className="dates">{props.card.startDate} - {props.card.endDate}</div>
                    <p>{props.card.description}</p>
                </div>
            </div>
        </div>
    )
}