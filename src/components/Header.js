import React from 'react'
import styled from "styled-components";

var moment = require('moment');

const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1%;
    position: absolute;
    top: 0;
    color: #fff;
`

export default function Header(props) {
    const today = moment().format('YYYY MM DD').split(' ').join('-');

    function changeDate(event) {
        props.setApiDate(event.target.value);
    }
    return (
        <HeaderDiv>
            <p>Photo Of The Day Date: {props.date}</p>
            Select a new date: <input type="date" id="photoDate" min="1995-06-16" max={today} value={props.apiDate} onChange={changeDate}/>
            <h3>{props.title}</h3>
        </HeaderDiv>
    )
}
