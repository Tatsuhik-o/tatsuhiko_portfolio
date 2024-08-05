import React from "react";
import message from './message.png';

const PersonalPortfolio = () => {
  return (
    <div className="Container" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <img src={message} alt="taha" />
    </div>
  );
};

export default PersonalPortfolio;
