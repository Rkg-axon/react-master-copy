'use client';
import { JumboCard } from '@jumbo/components';
import { Div } from '@jumbo/shared';
import { Typography } from '@mui/material';
import {
  GoogleMap,
  InfoWindow,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import React from 'react';

interface MarkerObject {
  photo_id: number | string;
  latitude: number;
  longitude: number;
  owner_name: string;
}
const MarkerClustererMap = ({ padding = false }: { padding: boolean }) => {
  const cardProps = padding && {
    contentWrapper: true,
    contentSx:{ pt: 3, backgroundColor: 'background.paper' }
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
  });
  const [markers, setMarkers] = React.useState<MarkerObject[]>([]);
  const [selectedLocation, setSelectedLocation] =
    React.useState<MarkerObject | null>(null);

  const onSelect = (marker: MarkerObject) => {
    setSelectedLocation(marker);
  };

  React.useEffect(() => {
    const mapApiUrl = `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`;
    const abortController = new AbortController();

    fetch(mapApiUrl, { signal: abortController.signal })
      .then((res: any) => res.json())
      .then((data: { photos: MarkerObject[] }) => {
        setMarkers(data.photos);
      });
    // return () => {
    //   abortController.abort();
    // };
  }, []);

  return (
    <JumboCard {...cardProps}>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ height: '400px', width: '100%' }}
          zoom={3}
          center={{ lat: -28.024, lng: 140.887 }}
        >
          <MarkerClusterer enableRetinaIcons averageCenter gridSize={60}>
            {(clusterer) => (
              <div>
                {markers.map((marker, index) => (
                  <Marker
                    key={index}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    onClick={() => onSelect(marker)}
                    clusterer={clusterer}
                  />
                ))}

                {selectedLocation && (
                  <InfoWindow
                    position={{
                      lat: selectedLocation.latitude,
                      lng: selectedLocation.longitude,
                    }}
                    onCloseClick={() => setSelectedLocation(null)}
                  >
                    <Div>
                      <Typography>{`Owner: ${selectedLocation.owner_name}`}</Typography>
                      <Typography>
                        {' '}
                        {`Coordinates: ${selectedLocation.latitude}, ${selectedLocation.longitude}`}
                      </Typography>
                    </Div>
                  </InfoWindow>
                )}
              </div>
            )}
          </MarkerClusterer>
        </GoogleMap>
      )}
    </JumboCard>
  );
};

export { MarkerClustererMap };
