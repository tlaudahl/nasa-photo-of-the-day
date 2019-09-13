import React from 'react'


export default function Photo(props) {
    if (props.media_type === 'video') {
        return (
            <div>
                <iframe width='800' height='800' src={props.mediaSrc} title={props.title} allowFullScreen/>
            </div>
        )
    } else if(props.media_type === 'image') {
        return (
            <div>
                <a href={props.hdUrl} title='Click for Full Resolution Image' rel="noopener noreferrer" target='_blank'>
                    <img src={props.mediaSrc} alt={props.title}/>
                </a>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Media not found</h1>
            </div>
        )
    }
}