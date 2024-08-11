// MapGenerator.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const MapGenerator = () => {
  const [markers, setMarkers] = useState([]);

  const AddMarker = () => {
    useMapEvents({
      click: (e) => {
        const newMarker = {
          position: e.latlng,
          popupText: `Marker at ${e.latlng.lat.toFixed(2)}, ${e.latlng.lng.toFixed(2)}`
        };
        setMarkers([...markers, newMarker]);
      }
    });
    return null;
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <AddMarker />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.popupText}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapGenerator;
