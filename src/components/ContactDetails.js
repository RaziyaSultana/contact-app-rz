import React from "react";
import {Link, useLocation} from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetails = (props) => {
    let location = useLocation();
   //console.log(location);
   console.log("details---->",location.state); //https://ui.dev/react-router-pass-props-to-link
    return (
        <div className="main">
           <div className="ui card centered">
              <div className="image">
                 <img src={user} alt="user" />
              </div> 
              <div className="content">
                  <div className="header">{location.state.contact.name}</div>
                  <div className="description">{location.state.contact.email}</div>
              </div>
           </div> 
           <div className="center-div">
               <Link to="/">
               <button className="ui button blue center">
                   Bact to Contact List
               </button>
               </Link> 
           </div>
        </div>
    );
};

export default ContactDetails;