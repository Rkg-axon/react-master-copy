'use client';
import { JumboCard } from '@jumbo/components';
import { GoogleMap, KmlLayer, useLoadScript } from '@react-google-maps/api';
const KmlLayerMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCJM0a8oSaRMwxthozENQg1euRI51aNXJQ',
  });
  return (
    <JumboCard
      contentWrapper
      contentSx={{ pt: 3, backgroundColor: 'background.paper' }}
    >
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '400px' }}
          center={{
            lat: 41.876,
            lng: -87.624,
          }}
          zoom={8}
        >
          <KmlLayer
            url={'https://googlearchive.github.io/js-v2-samples/ggeoxml/cta.kml'}
            options={{ preserveViewport: true }}
          />
        </GoogleMap>
      )}
    </JumboCard>
  );
};

export { KmlLayerMap };
