'use client';
import { Div } from '@jumbo/shared';
import { VectorMap } from '@react-jvectormap/core';
import { IMapObject } from '@react-jvectormap/core/dist/types';
import { worldMill } from '@react-jvectormap/world';
import React from 'react';
import { countriesMarkers } from '../../data';
const vectorRef = React.createRef<IMapObject | null>();

// TODO: fix the self is not defined error
const VisitorsOnMap = () => {
  return (
    <Div
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '200px',
        overflow: 'hidden',

        '& .jvectormap-container': {
          height: '100%',
          width: '100%',
        },
        m: 3,
      }}
    >
      <VectorMap
        mapRef={vectorRef}
        backgroundColor={'common.white'}
        map={worldMill}
        regionStyle={{
          initial: {
            fill: '#DEE4E8',
          },
        }}
        markerStyle={{
          initial: {
            fill: '#FFC542',
            stroke: 'rgba(50, 88, 239, 0.2)',
          },
        }}
        zoomOnScroll={false}
        markers={countriesMarkers}
      />
    </Div>
  );
};

export { VisitorsOnMap };
