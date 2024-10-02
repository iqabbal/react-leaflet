import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, useMapEvents , Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { findDOMNode } from 'react-dom';

const MyMapComponent = () => {
    // State to store the clicked position
    const position = [33.962327, -6.873972];
    const [clickedPosition, setClickedPosition] = useState(null);
    const [zoomLevel, setZoomLevel] = useState(13);
    const [dragging, setDragging] = useState(false)

    //
    const icon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
    shadowSize: [41, 41],
  });

    // Custom component to handle map clicks
    const ClickHandler = () => {
      useMapEvents({
          click: (event) => {
              setClickedPosition(event.latlng);
              console.log('click position:', event.latlng);
          },
          dblclick: (event) => {
              const map = useMapEvents();
              map.setView(event.latlng, map.getZoom() + 1);
          },
          mousemove: (event) => {
              // Optional: Show tooltip or console log the coordinates
              // console.log('Mouse position:', event.latlng);
          },
          zoom: (event) => {
              const map = useMapEvents();
              setZoomLevel(map.getZoom());
          },
          drag: () => {
              setDragging(true);
          },
          zoomend: () => {
              const map = useMapEvents();
              setZoomLevel(map.getZoom());
              setDragging(false);
              console.log('Zoom ended. Current zoom level:', zoomLevel);
          },
          movestart: () => {
              console.log('Map movement started');
          }
      });
      return null;
  };
    return (
        <MapContainer center={position} zoom={13} style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {/* Add the click handler to the map */}
            <ClickHandler />

            <Marker position={position} icon={icon}>
                  <Popup>
                     This is a custom marker!
                 </Popup>
             </Marker>
            {/* Display a popup at the clicked position */}
            {clickedPosition && (
                <Popup position={clickedPosition}>
                    <div>
                        <p>Coordinates:</p>
                        <p>Latitude: {clickedPosition.lat}</p>
                        <p>Longitude: {clickedPosition.lng}</p>
                    </div>
                </Popup>
            )}
        </MapContainer>
    );
};

export default MyMapComponent;

