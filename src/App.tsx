import Title from './components/titleText';
import React from 'react';
import './App.css';
import Header from './components/core/header/index'
import Dropdown from './components/dropdown';
import { Container } from '@mui/system';
import Cardbox from './components/cardbox';
import Rectangle from './components/rectangle';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className='bg-[#FAFAFA] h-full w-full'>
      <Header />
      <Container maxWidth="lg" sx={{ m: 10, textAlign: "left" }} >
        <Title />
        <div className='flex'>
          <Dropdown item={["item1", "item2"]} title="Client" />
          <Dropdown item={["item1", "item2"]} title="Services" />
          <Dropdown item={["item1", "item2"]} title="Task" />
        </div>
        <Rectangle />
      </Container>
    </div>
  );
}

export default App;
