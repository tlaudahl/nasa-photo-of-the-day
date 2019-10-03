import React from 'react'
import styled from "styled-components";

const HeaderDiv = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 1%;
`

export default function Header(props) {

    function changeDate(event) {
        props.setApiDate(event.target.value);
    }

    if (props.copyright === undefined || props.copyright === null || props.copyright === '') {
        return (
            <HeaderDiv>
                <img src={require('../logo.png')} alt='logo' width='100px' height='100px' />
                <div className='row'>
                    <p>Photo Of The Day Date: {props.date}</p>
                    Select a new date: <input type="date" id="photoDate" min="1995-06-16" max="2019-09-12" value={props.apiDate} onChange={changeDate}/>
                </div>
            <h4>{props.title}</h4>
        </HeaderDiv>
        )
    } else {
        return (
            <HeaderDiv>
                <img src={require('../logo.png')} alt='logo' width='100px' height='100px' />
                <div className='row'>
                    <p>Photo Of The Day Date: {props.date}</p>
                    Select a new date: <input type="date" id="photoDate" min="1995-06-16" max="2019-09-12" value={props.apiDate} onChange={changeDate}/>
                </div>
                <div className='row'>
                    <h3>{props.title}</h3>
                    <h4>&copy; {props.copyright}</h4>
                </div>
            </HeaderDiv>
        )
    }
}
