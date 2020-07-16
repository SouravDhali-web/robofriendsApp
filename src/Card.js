import React from 'react';


function Card(props) {
    return (
        
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
            <img src={`https://robohash.org/${props.id}?100*100`} alt="robo-friends"/>

            <div>
                <h3> {props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    )
};


export default Card;


