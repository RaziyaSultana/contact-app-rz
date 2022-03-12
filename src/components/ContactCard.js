import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    console.log("kfhfjhf",props)
    return (
        <div className="item">
               <img className="ui avatar image" src={user} alt="user" />
               <div  className="content">
                    <div className="header">{name}</div>
                    <div>{email}</div>
               </div>
               <i className="trash right floated alternate outline icon"
               style={{color:"red", marginTop: "7px"}}
               onClick={() => props.clickhandler(id)}
               ></i>
           </div>
    );
};

export default ContactCard;