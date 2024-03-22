'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, Stack } from '@mui/material';
import {
  Autocomplete,
  DirectionsRenderer,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from '@react-google-maps/api';
import { useRef, useState } from 'react';
// import '../style.css'
const center = {
  lat: 34.8731,
  lng: 28.7718,
};

const DirectionsMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
    libraries: ['places'],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsResponse, setDirectionsResponse] =
    useState<google.maps.DirectionsResult | null>(null);
  const originRef = useRef<HTMLInputElement>(null);
  const destinationRef = useRef<HTMLInputElement>(null);

  async function calculateRoute() {
    if (
      !originRef.current ||
      !destinationRef.current ||
      originRef.current.value === '' ||
      destinationRef.current.value === ''
    ) {
      return;
    }
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    if (originRef.current) originRef.current.value = '';
    if (destinationRef.current) destinationRef.current.value = '';
  }

  return isLoaded ? (
    <JumboCard
      contentWrapper
      contentSx={{ pt: 3, backgroundColor: 'background.paper' }}
    >
      <Div
        sx={{
          width: '32%',
          height: '75px',
          backgroundColor: '#fff',
          position: 'absolute',
          left: '18%',
          transform: 'translateX(-50%)',
          top: '28px',
          zIndex: 1,
          borderRadius: '50px',
          border: '1px solid #000',
          display: 'grid',
          alignItems: 'center',
          padding: '10px 20px',
        }}
      >
        <Stack direction={'row'} spacing={0.3} mb={1}>
          <Autocomplete>
            <input
              type='text'
              name='Origin'
              className='form-control'
              placeholder='Origin'
              ref={originRef}
            />
          </Autocomplete>
          <Autocomplete>
            <input
              type='text'
              name='Destination'
              className='form-control'
              placeholder='Destination'
              ref={destinationRef}
            />
          </Autocomplete>
        </Stack>
        <Stack direction={'row'} spacing={2}>
          <IconButton onClick={calculateRoute}>
            <SearchIcon />
          </IconButton>
          <IconButton onClick={clearRoute}>
            <HighlightOffIcon />
          </IconButton>
        </Stack>
      </Div>
      <GoogleMap
        center={center}
        zoom={5}
        mapContainerStyle={{ width: '100%', height: '400px' }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={center} />
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
    </JumboCard>
  ) : (
    <></>
  );
};

export { DirectionsMap };
