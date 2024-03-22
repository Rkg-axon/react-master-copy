'use client';
import { JumboCard } from '@jumbo/components';
import { GoogleMap, InfoBox, useLoadScript } from '@react-google-maps/api';

const StyledMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
  });
  const center = {
    lat: 44.8799929,
    lng: 21.3190073,
  };
  const options = { closeBoxURL: '', enableEventPropagation: true };
  return (
    <JumboCard
      contentWrapper
      contentSx={{ pt: 3, backgroundColor: 'background.paper' }}
    >
      {isLoaded && (
        <GoogleMap
          zoom={11}
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={center}
        >
          <InfoBox options={options} position={center} onLoad={() => {}}>
            <div
              style={{ backgroundColor: 'yellow', opacity: 0.75, padding: 20 }}
            >
              <div style={{ fontSize: 16, color: `#08233B` }}>Taipei</div>
            </div>
          </InfoBox>
        </GoogleMap>
      )}
    </JumboCard>
  );
};

export { StyledMap };
