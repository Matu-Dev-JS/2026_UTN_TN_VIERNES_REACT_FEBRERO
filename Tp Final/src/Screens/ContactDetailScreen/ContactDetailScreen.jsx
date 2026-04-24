import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactList from '../../Components/ContactList/ContactList'
import { ContactDetailContext } from '../../Context/ContactDetailContext'

const ContactDetailScreen = () => {
    const { contacts_state } = useContext(ContactsContext)
    const { contact_selected } = useContext(ContactDetailContext)
    console.log("Contacto seleccionado", contact_selected)


    return (
        <div>
            <ContactList />
            {
                !contact_selected
                    ? <h1>El id del contacto no existe</h1>
                    : <div>
                        {
                            contact_selected
                            &&
                            <h1> Contacto seleccionado: {contact_selected.name}</h1>
                        }

                    </div>
            }

        </div>
    )
}

export default ContactDetailScreen