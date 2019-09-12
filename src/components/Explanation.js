import React from 'react'

export default function Explanation(props) {
    return (
        <div className='explanation'>
            <h3>Photo Explanation</h3>
            <p>{props.explanation}</p>
        </div>
    )
}
