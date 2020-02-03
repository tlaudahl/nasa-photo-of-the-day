import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import "./App.css";


// Component Imports
import Photo from './components/Photo';
import Header from './components/Header';
import Explanation from './components/Explanation';

var moment = require('moment');

const AppDiv = styled.div`
  margin: 0 auto;
`

function App() {
  const today = moment().format('YYYY MM DD').split(' ').join('-');

  const [photo, setPhoto] = useState({});
  const [apiDate, setApiDate] = useState(today);
  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=krbpcHPEGT17nSngcBn42n2chF1bgvgtSnraVZuW&date=${apiDate}`)
    .then(response => {
        const photo = response.data;
        setPhoto(photo);
    })
    .catch(error => {
        console.log('The NASA API could not be reached', error);
    })
}, [apiDate]);
  return (
    <div>
      <Header title={photo.title} copyright={photo.copyright} date={photo.date} setApiDate={setApiDate} apiDate={apiDate} />
      <Photo media_type={photo.media_type} mediaSrc={photo.url} title={photo.title} hdUrl={photo.hdurl}/>
      <Explanation explanation={photo.explanation}/>
    </div>
  );
}

export default App;