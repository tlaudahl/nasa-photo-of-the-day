import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import "./App.css";

// Component Imports
import Photo from './components/Photo';
import Header from './components/Header';
import Explanation from './components/Explanation';

const AppDiv = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

function App() {
  const [photo, setPhoto] = useState({});
  const [apiDate, setApiDate] = useState('2019-09-12');
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=krbpcHPEGT17nSngcBn42n2chF1bgvgtSnraVZuW&date=${apiDate}`)
    .then(response => {
        const photo = response.data;
        setPhoto(photo);
    })
    .catch(error => {
        console.log('The Nasa API could not be reached', error);
    })
}, [apiDate]);
  return (
    <AppDiv>
      <Header title={photo.title} copyright={photo.copyright} date={photo.date} setApiDate={setApiDate} apiDate={apiDate} />
      <Photo media_type={photo.media_type} mediaSrc={photo.url} title={photo.title} hdUrl={photo.hdurl}/>
      <Explanation explanation={photo.explanation}/>
    </AppDiv>
  );
}

export default App;