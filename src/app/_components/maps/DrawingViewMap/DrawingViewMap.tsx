'use client';
import { JumboCard } from '@jumbo/components';
import {
  DrawingManager,
  GoogleMap,
  useLoadScript,
} from '@react-google-maps/api';
const DrawingViewMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
    libraries: ['drawing'],
  });
  return (
    <JumboCard
      contentWrapper
      contentSx={{ pt: 3, backgroundColor: 'background.paper' }}
    >
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={new window.google.maps.LatLng(47.646935, -122.303763)}
          zoom={15}
        >
          <DrawingManager />
        </GoogleMap>
      )}
    </JumboCard>
  );
};
export { DrawingViewMap };
