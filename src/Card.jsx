import React from 'react';

export default function Card() {
  return (
  <div className='card'>

      <img src="https://source.unsplash.com/WLxQvbMyfas" alt="image-of-a-landscape" className='imageUrl'/>
      <div className='card--info'>
        <div className='card-location-container'>
          <img src="../public/images/pin.svg" alt="location pin"></img>
          <p className='location'>Country</p>
          <p className="google-map"></p>
          <h1 className='title'>Mount Fuji</h1>
          <h3 className='duration'>12 Jan, 2021 - 24 Jan, 2021</h3> 
          <p className='description'></p>

        </div>
      </div>

  </div>)
}
