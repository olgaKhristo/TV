import React from 'react';
import DOMPurify from 'dompurify';


 
export default function ShowCard({show}) {
    const cleanHTML = DOMPurify.sanitize(show.summary);
    return (
        <div className='show-card'>
        <div>
            <img src={show.image.medium}/>
        </div>
       <div>
        {show.rating.average ? <span> {show.rating.average}/10</span> : ""}
        <h3>{show.name}</h3>
        <em> {show.languade}, {show.premiered}</em>
       <div dangerouslySetInnerHTML={{__html: cleanHTML}}></div>

       </div>
        </div>
    )
}