import React from 'react'
import '../App.css';

export default function Photo(props) {
    if (props.media_type === 'video') {
        return (
            <div className='photoOfTheDay'>
                <iframe style={{ width: '99.5vw', height: '99.5vh', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={props.mediaSrc} title={props.title} allowFullScreen/>
            </div>
        )
    } else if(props.media_type === 'image') {
        return (
            <a href={props.hdUrl} title='Click for Full Resolution Image' rel="noopener noreferrer" target='_blank'>
                <img src={`${props.mediaSrc}`} style={{ height: '100vh', width: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', WebkitBackgroundSize: 'cover', MozBackgroundSize: 'cover', OBackgroundSize: 'cover' }} />
            </a>
        )
    } else {
        return (
            <div>
                <h1>Media not found. Sometimes the server takes awhile to respond.</h1>
            </div>
        )
    }
}