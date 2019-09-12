import React from 'react'

export default function Header(props) {

    function changeDate(event) {
        props.setApiDate(event.target.value);
    }

    if (props.copyright === null || props.copyright === '') {
        return (
            <div className='header'>
            <h1>{props.title}</h1>
            <p>Photo Of The Day Date: {props.date}</p>
            <input type="date" id="photoDate" min="1995-06-16" max="2019-09-12" value={props.apiDate} onChange={changeDate}/>
        </div>
        )
    } else {
        return (
            <div className='header'>
                <h1>{props.title}</h1>
                <h3>{props.copyright}</h3>
                <p>Photo Of The Day Date: {props.date}</p>
                Select a new date: <input type="date" id="photoDate" min="1995-06-16" max="2019-09-12" value={props.apiDate} onChange={changeDate}/>
            </div>
        )
    }
}
