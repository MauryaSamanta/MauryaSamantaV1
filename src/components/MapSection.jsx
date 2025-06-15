import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { Box, useMediaQuery } from '@mui/material'
import WelcomeAvatar from './WelcomeAvatar'
import marker from "../assets/rec.png"
// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
})

const FlyToLocation = ({ lat, lng }) => {
  const map = useMap()
  useEffect(() => {
    map.flyTo([lat, lng], 7, { duration: 2 })
  }, [lat, lng, map])
  return null
}
const MapSection = () => {
  const [localTime, setLocalTime] = useState('');
  const isMobile = useMediaQuery('(max-width:600px)');

  useEffect(() => {
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZoneName: 'short',
    };
    setLocalTime(now.toLocaleTimeString('en-IN', options));
  }, []);

  // Fixed location: Kolkata coords
  const position = { lat: 22.57, lng: 88.36 };

  return (
    <Box sx={{ width: !isMobile ? '45%' : '100%', height: '200px', mt: 4, position: 'relative' }}>
      {/* Floating info box */}
      <Box
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 1000,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          px: 2,
          py: 1,
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: 500,
          backdropFilter: 'blur(4px)',
        }}
      >
        {localTime}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '120px',              // more height for smoother blend
          pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 100%)',
          borderRadius: '0 0 12px 12px',
          zIndex: 500,
        }}
      />


      <MapContainer
        center={[position.lat, position.lng]}
        zoom={7}
        style={{ height: '100%', width: '100%', borderRadius: '12px' }}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        boxZoom={false}
        tap={false}
      >
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
        />
        {/* <TileLayer url="https://api.maptiler.com/maps/{style}/256/{z}/{x}/{y}.png?key=4S1YPmtixaUDaHa1VZ6e"/> */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
        />

        <Marker
  position={[position.lat, position.lng]}
  icon={L.divIcon({
    className: '',
    html: '<div class="leaflet-pulsing-dot"></div>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  })}
/>

        <FlyToLocation lat={position.lat} lng={position.lng} />
        {/* Removed FlyToLocation for static zoom */}
      </MapContainer>
      {/* <Box
  className="plane-animation"
  sx={{
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    zIndex: 1000,
    fontSize: 30,
    animation: 'flyPlane 4s ease-in-out forwards',
    transform: 'rotate(-45deg)', // pointing NW
  }}
>
  ✈️
</Box> */}

      {/* <WelcomeAvatar/> */}
     <style>
  {`
    .leaflet-pulsing-dot {
      width: 12px;
      height: 12px;
      background: #2196f3;
      border-radius: 50%;
      box-shadow: 0 0 0 rgba(33, 150, 243, 0.5);
      animation: pulse 2s infinite;
      z-index: 200; /* Lower than labels */
      transform: translateY(6px); /* Move it down a bit to not overlap text */
    }

    @keyframes pulse {
      0% {
        transform: scale(0.9) translateY(-10px);
        box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.5);
      }
      70% {
        transform: scale(1) translateY(-10px);
        box-shadow: 0 0 0 10px rgba(33, 150, 243, 0);
      }
      100% {
        transform: scale(0.9) translateY(-10px);
        box-shadow: 0 0 0 0 rgba(33, 150, 243, 0);
      }
    }

      @keyframes flyPlane {
      0% {
        right: -60px;
        top: 40px;
        opacity: 0;
        transform: rotate(10deg) scale(0.7);
      }
      50% {
        opacity: 1;
      }
      100% {
        right: 50%;
        top: 80px;
        transform: rotate(0deg) scale(1);
        opacity: 0.8;
      }
    }
  `}
</style>


    </Box>
    
  );
};



export default MapSection
