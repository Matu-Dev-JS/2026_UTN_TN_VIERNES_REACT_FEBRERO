import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactList from '../../Components/ContactList/ContactList'

const HomeScreen = () => {
    //Esto te devolvera el provider_values del ContactContextProvider
    //Esto le decimos consumir un contexto
    const {contacts_state} = useContext(ContactsContext)

  return (
    <div>
        <ContactList/>
    </div>
  )
}

export default HomeScreen