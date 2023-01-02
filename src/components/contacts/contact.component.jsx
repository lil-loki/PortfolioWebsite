import React from 'react'

import {ContactsMainContainer,ContactsContainer,ContactsLinks} from './contact.style'

export default function Contacts() {
  return (
    <ContactsMainContainer>
        <ContactsContainer>
            <ContactsLinks>Resume ---{'>'}{'>'} <a href=''>Under Construction</a></ContactsLinks>
            <ContactsLinks>Email ---{'>'}{'>'} <a href='mailto:lokesh.sivakumar@gmail.com'>lokesh.sivakumar@gmail.com</a></ContactsLinks>
            <ContactsLinks>GitHub ---{'>'}{'>'} <a href='https://github.com/lil-loki'>github/lil-loki</a></ContactsLinks>
            <ContactsLinks>Linkedin ---{'>'}{'>'} <a href='https://linkedin.com/in/lokesh-sivakumar-921133155/'>Linkedin/Lokesh.S</a></ContactsLinks>
        </ContactsContainer>
    </ContactsMainContainer>
  )
}
