import React from 'react';
import './Contact.css';

const online = true;

function Contact() {
    return (
    <figure className="Contact">
      <img class="avatar" 
        src="https://media.tenor.com/images/51f2f57be93a6bbc966b4802e0507e7d/tenor.gif"
        alt="Elle Woods winks"
      />
      <div>
      
        <blockquote className="name">
          Elle Woods
        </blockquote>
        <status >
        <div className={online ? "status-online" : "status-offline"}></div>

          {online ? 'Online' : 'Offline'}
        </status>
       
      </div>
    </figure>
    );
}




export default Contact;