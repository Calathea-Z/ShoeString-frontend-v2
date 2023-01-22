import { useMemo } from 'react';
import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { RingLoader } from 'react-spinners';

const center = { lat: 48.8584, lng: 2.2945 }

function MapBox() {  
    const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    })

    if(!isLoaded) return <RingLoader color={'black'} size={50} aria-label="Loading"/>
       
return(
    <div className='ml-4 mt-8 rounded-md border-2 border-gray-200'>
        <GoogleMap center={center} zoom={12} 
        mapContainerStyle={{ width: '100%', height: '800px'}}
        >
            <Marker position={center} />
        </GoogleMap>
    </div>
  )
}


export default MapBox