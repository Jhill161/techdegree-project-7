import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

const Gallery = props => {
    const results = props.data;
    let photos;

    // Check if results has more than 0 results and if so render with map
    if (results.length > 0){
        photos = results.map(photo =>
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
    // If not more than zero result then show <NotFound />  Return div to prevent gallery not loading error
    }else if (props.loading) {
        return <p>Loading...</p>
    }else {
        photos = <NotFound />
        return (
            <div className="photo-container">
                <ul>
                    {photos}
                </ul>
            </div>
        )
    }
}
export default Gallery;