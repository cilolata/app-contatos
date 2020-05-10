import React from 'react';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';
import Contact from './components/Contact';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: [],
    }
  }
  
  componentDidMount() {
    fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts')
    .then(res => res.json())
    .then(res => {
      this.setState({
        contacts: res,
      })
      console.log(res)
    })
  }
  
  render() {
    const { contacts } = this.state
    console.log(contacts)
    return (
      <React.Fragment> 
      <Topbar />
      <Filters />
      <Contacts>
      {contacts.map(contact => (
      <Contact
      key={contact.id}
      name = {contact.name}
      avatar={contact.avatar}
      phone = {contact.phone}
      country = {contact.country}
      admissionDate = {contact.admissionDate}
      company = {contact.company}
      department = {contact.department}
      />
      ))}
      </Contacts>
      
      </React.Fragment>
    
    )
  }
}

export default App;
