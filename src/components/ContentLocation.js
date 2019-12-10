import React, { useEffect } from 'react';
import styled from 'styled-components';

const Map = styled.div`
  height: 100%;
  width: 100%;
`;

const ContentLocation = ({ contentId, latitude, longitude }) => {
  useEffect(() => {
    if ('kakao' in window) {
      const { kakao } = window;
      const { maps } = kakao;

      const container = document.getElementById(`map-${contentId}`);
      const center = new maps.LatLng(latitude, longitude);
      const map = new maps.Map(container, { center });

      const marker = new maps.Marker({ position: center });
      marker.setMap(map);
    }
  }, [contentId, latitude, longitude]);

  return <Map id={`map-${contentId}`} />;
};

export default ContentLocation;
