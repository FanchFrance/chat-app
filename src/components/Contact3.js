import React from 'react';
import './Contact.css';

const online = true;

function Contact3() {
    return (
    <figure className="Contact">
      <img class="avatar" 
        src="https://media.tenor.com/images/d25831be67c14ea5550f4425ca769fac/tenor.gif"
        alt="Cardy B"
      />
      <div>
      
        <blockquote className="name">
          Cardy B
        </blockquote>
        <status >
        <div className={online ? "status-online" : "status-offline"}></div>

          {online ? 'Online' : 'Offline'}
        </status>
       
      </div>
    </figure>
    );
}
export default Contact3;