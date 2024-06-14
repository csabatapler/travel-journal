import React from 'react';

export default function Card(props) {
  console.log(props)
  return (
  <div className='card'>
      <img src={props.item.imageUrl} alt="image-of-a-landscape" className='card-image'/>
      <div className='card-info'>
        <div className='card-location-container'>
          <img src="../public/images/pin.svg" alt="location pin"></img>
          <p className='location'>{props.item.location}</p>
          <a className="google-map" href={props.item.googleMapsUrl}>View on Google Maps</a>
        </div>
        <div className="card-details-container">
          <h1 className='title'>{props.item.title}</h1>
          <h3 className='duration'>{props.item.startDate}-{props.item.endDate}</h3> 
          <p className='description'>{props.item.description}</p>
        </div>
      </div>
  </div>)
}
