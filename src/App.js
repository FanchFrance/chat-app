import React from 'react';
import Contact from "./components/Contact"; 
 
const name1 = "Elle Woods";
const name2 = "Ryan Reynolds";
const name3 = "Cardi B";

const avatar1 = "https://media.tenor.com/images/51f2f57be93a6bbc966b4802e0507e7d/tenor.gif";
const avatar2 = "https://media1.tenor.com/images/863661e9e54fce14941cd0146dc2a12b/tenor.gif?itemid=4318212";
const avatar3 = "https://media.tenor.com/images/d25831be67c14ea5550f4425ca769fac/tenor.gif";

const isOnlineOffline = true;


function App() {
  return (
    <div className="App">
     <Contact
     name={name1}
     avatar={avatar1}
     isOnline={true}
     isOnlineStr={isOnlineOffline ? "Online" : "Offline"}
     />  
     <Contact
     name={name2}
     avatar={avatar2}
     isOnline={false}
     isOnlineStr={isOnlineOffline ? "Online" : "Offline"}
     /> 
     <Contact
     name={name3}
     avatar={avatar3}
     isOnline={true}
     isOnlineStr={isOnlineOffline ? "Online" : "Offline"}
     /> 
    </div>
  );
}

export default App;
