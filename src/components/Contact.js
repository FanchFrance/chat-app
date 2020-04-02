import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types'; 

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
Contact.propTypes ={
  avatar  : PropTypes.string.isRequired,
  name    : PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}




export default Contact;