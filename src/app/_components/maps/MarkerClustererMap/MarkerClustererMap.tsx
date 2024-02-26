'use client';
import { JumboCard } from '@jumbo/components';
import {
  GoogleMap,
  Marker,
  MarkerClusterer,
  useLoadScript,
} from '@react-google-maps/api';
import React from 'react';
interface MarkerObject {
  photo_id: number | string;
  latitude: number;
  longitude: number;
}
const MarkerClustererMap = () => {
  const [markers, setMarkers] = React.useState<MarkerObject[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
  });

  React.useEffect(() => {
    const mapApiUrl = `https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`;
    const abortController = new AbortController();

    fetch(mapApiUrl, { signal: abortController.signal })
      .then((res: any) => res.json())
      .then((data: { photos: MarkerObject[] }) => {
        setMarkers(data.photos);
      });
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <JumboCard>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{ lat: 25.0391667, lng: 121.525 }}
          zoom={3}
        >
          <MarkerClusterer enableRetinaIcons averageCenter gridSize={60}>
            {(clusterer) => (
              <div>
                {markers.map((marker) => (
                  <Marker
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    key={marker.photo_id}
                    clusterer={clusterer}
                  />
                ))}
              </div>
            )}
          </MarkerClusterer>
        </GoogleMap>
      )}
    </JumboCard>
  );
};

export { MarkerClustererMap };
