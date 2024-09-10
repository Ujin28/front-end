import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import HomeSearchIconCourseBox from '../components/Common/HomeSearchIconCourseBox';
import Navigation from '../components/Common/Navigation';
import HomeBottomSheet from '../components/Common/Home_BS';
import MapComponent from '../components/MapComponent';
import MapSearchBox from '../components/Common/MapSearchBox';

const Map = () => {
  const location = useLocation();
  const selectedCategories = location.state?.selectedCategories || [];

  return (
    <div>
      <MapSearchBox />
      <MapComponent />
      <Navigation></Navigation>
    </div>
  );
};

export default Map;
