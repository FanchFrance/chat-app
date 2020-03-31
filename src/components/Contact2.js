import React from 'react';
import './Contact.css';

const online = false;

function Contact2() {
    return (
    <figure className="Contact">
      <img class="avatar" 
        src="https://media1.tenor.com/images/863661e9e54fce14941cd0146dc2a12b/tenor.gif?itemid=4318212"
        alt="Ryan Reynolds dirty"
      />
      <div>
      
        <blockquote className="name">
          Ryan Reynolds
        </blockquote>
        <status >
        <div className={online ? "status-online" : "status-offline"}></div>

          {online ? 'Online' : 'Offline'}
        </status>
       
      </div>
    </figure>
    );
}
export default Contact2;