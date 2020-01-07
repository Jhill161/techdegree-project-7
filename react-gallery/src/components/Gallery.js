import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = props => {
    const results = props.data;
    let photos = results.map(photo =>
        <Photo data={photo} key={photo.id} />
        )
    return (
        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
}
export default Gallery;