import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '50vh'
};

const center = {
  lat: 13.684051,
  lng: -89.304675
};

function GoogleMaps() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyC6-LO2EWr39Gxu58fMMle7HQMpGWm2V-E"
  })

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      // onUnmount={onUnmount}
      
    >
      <Marker position={{ lat: 13.684117780649242, lng: -89.30468639938825 }} />

      <></>
    </GoogleMap>
  ) : <></>
}

export default React.memo(GoogleMaps)
