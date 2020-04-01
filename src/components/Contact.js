import React from 'react';
import './Contact.css';
 

function Contact(props) {
    return (
      <figure className="Contact">
      <img className="avatar" src={props.avatar} alt={props.name} />
      <figcaption>
        <div className="name">{props.name}</div>
        <div className="status">
          <span
            className={props.isOnline ? "status-online" : "status-offline"}
          />
          <span className="">{props.isOnlineStr}</span>
        </div>
      </figcaption>
    </figure>
    );
}





export default Contact;