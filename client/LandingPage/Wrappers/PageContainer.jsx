import React from 'react';
import NavBar from '../Components/navbar.jsx'
import HeaderImage from '../Components/HeaderImage.jsx'
import CardContainter from './CardCaontainer.jsx'

const PageContainer = (props) => (
  <div>
    <NavBar />
    <HeaderImage />
    <CardContainter />
  </div>
);


export default PageContainer