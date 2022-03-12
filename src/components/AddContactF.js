
//https://www.digitalocean.com/community/tutorials/react-converting-to-a-hook

import React , { useState } from "react";
import {useNavigate} from "react-router-dom";

const AddContactF = (props) => {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

   const  add = (e) => {
        e.preventDefault();
        console.log("name>>",name);
        console.log("email>>",email);
        console.log("proppppp>>",props);
       
        if(name === "" || email === "") {
            alert("All the fields are mandatory!");
            return;
        }
        props.addContactHandler({name,email});
        setName("");
        setEmail("")
        console.log("after name>>",name);
        console.log("after email>>",email);
        navigate("/"); //https://reactrouter.com/docs/en/v6/getting-started/tutorial#navigating-programmatically
        //console.log(this.state);
    }

    return(
        <div className="ui main">
                    <h2>Add Contact</h2>
                    <form className="ui form" onSubmit={add}>
                        <div className="field">
                            <label>Name</label>
                            <input 
                             type="text"
                             name="name" 
                             placeholder="Name" 
                             value={name}
                             onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input 
                             type="text"
                             name="email" 
                             placeholder="Email" 
                             value={email}
                             onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <button className="ui button blue">Add</button>
                    </form>
                </div>
    )
};

export default AddContactF;
