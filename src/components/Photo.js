import React from 'react'
import '../App.css';
import styled from "styled-components";


export default function Photo(props) {
    if (props.media_type === 'video') {
        return (
            <div className='photoOfTheDay'>
                <iframe width='800' height='800' src={props.mediaSrc} title={props.title} allowFullScreen/>
            </div>
        )
    } else if(props.media_type === 'image') {
        return (
            <a href={props.hdUrl} title='Click for Full Resolution Image' rel="noopener noreferrer" target='_blank'>
                <div style={{ backgroundImage: `url(${props.mediaSrc})`, height: '100vh', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover' }}>
                </div>
            </a>
        )
    } else {
        return (
            <div>
                <h1>Media not found</h1>
            </div>
        )
    }
}