import React from "react";

const Contact = props => {
  const on = props.online;
  return (
    <div className="Contact">
      <img className="avatar" src={props.avatar} alt={props.avatar} />
      <div className="status">
        <h2 className="name">{props.name}</h2>
        <div className="hello">
          {on ? (
            <div className="status-online" />
          ) : (
            <div className="status-offline" />
          )}
          {on ? (
            <div className="status-text">"Online"</div>
          ) : (
            <div className="status-text">"Offline"</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Contact;
