import React from 'react';
import './Contact.scss';


function Contact(props) {
  return(
    <article className="contact" data-testid="contact">
      <span  className="contact__avatar" >
        <img src={props.avatar} 
          alt={props.name}/>
      </span>
      <span className="contact__data">{props.name}</span>
      <span className="contact__data">{props.phone}</span>
      <span className="contact__data">{props.country}</span>
      <span className="contact__data">{props.admissionDate}</span>
      <span className="contact__data">{props.company}</span>
      <span className="contact__data">{props.department}</span>
    </article>

  )   
}


export default Contact;
