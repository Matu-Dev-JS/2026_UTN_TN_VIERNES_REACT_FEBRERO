import React, { useContext } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import { Link } from 'react-router'

const ContactList = () => {
    const {contacts_state, addNewContact} = useContext(ContactsContext)
    console.log("Contactos a renderizar: ", contacts_state)
    return (
        <div>
            <h1> Mis Contactos </h1>
            <div>
                {
                    contacts_state.map(
                        (contact) => {
                            return (
                                <Link to={`/contact/${contact.id}`} key={contact.id}>
                                    <h2> {contact.name} </h2>

                                </Link>
                            )
                        }
                    )
                }
            </div>
        </div>
    )
}

export default ContactList