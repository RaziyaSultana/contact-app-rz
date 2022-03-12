
import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid'; //for getting unique ids/keys
import {BrowserRouter as Router, Routes,Switch, Route } from "react-router-dom";
import './App.css';
import  Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import AddContactF from "./AddContactF";
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler =(contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuidv4(), ...contact }]);
  }

  const removeContactHandler = (id) => {
   const newContactList = contacts.filter((contact) => {
    return contact.id !== id;
   });

   setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  }, []); // retriving from local storage

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]); //storing in local storage


  return (
    
      <Router>
        <div className="ui container">
        <Header />
        <Routes>
         <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
         <Route path="/add" element={<AddContactF  addContactHandler={addContactHandler} />} />
         <Route path="/contact/:id" element={<ContactDetails/>} />
         
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler} /> */}
        {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
        </div>
      </Router>
   
  );
}

export default App;
