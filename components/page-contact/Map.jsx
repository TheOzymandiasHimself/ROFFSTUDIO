import React from 'react';

function Map() {
  return (
    <div className="google-map">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Las+Condes,Santiago,Chile&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );
}

export default Map;
