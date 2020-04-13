import React from "react";
import Contact from "./Contact";
const users = [
  {
    name: "Robert Reyes",
    avatar: "https://randomuser.me/api/portraits/men/28.jpg",
    online: false,
    text: "Offline"
  },
  {
    name: "Nellie Caldwell",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    online: true,
    text: "Offline"
  },
  {
    name: "Elle Woods",
    avatar:
      "https://media.tenor.com/images/51f2f57be93a6bbc966b4802e0507e7d/tenor.gif",
    online: true,
    text: "Offline"
  },
  {
    name: "Erica Hunt",
    avatar: "https://randomuser.me/api/portraits/women/87.jpg",
    online: false,
    text: "Offline"
  },
  {
    name: "Juanita Phillips",
    avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    online: true,
    text: "Offline"
  }
];

const ContactList = () =>
  users.map(props => (
    <Contact name={props.name} avatar={props.avatar} online={props.status} />
  ));

export default ContactList;
