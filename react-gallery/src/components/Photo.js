import React from 'react';

const Photo = props => {

  //variable to hold props data
  const id = props.data.id;
  const server = props.data.server;
  const farm = props.data.farm;
  const secret = props.data.secret;


  return (
  //dynamically add the props data the the image source attribute using template literals
  <li>
      <img src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} alt="" />
  </li>

  );
}

export default Photo;