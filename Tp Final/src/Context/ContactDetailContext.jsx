import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router";
import { ContactsContext } from "./ContactsContext";

const ContactDetailContext = createContext();

const ContactDetailContextProvider = () => {

    const {contact_id} = useParams()

    const {contacts_state} = useContext(ContactsContext)
    const contact_selected = contacts_state.find((contact) => Number(contact.id) === Number(contact_id))
    const provider_values = {
        contact_selected
    }
    return (
        <ContactDetailContext.Provider value={provider_values}>
            <Outlet/>
        </ContactDetailContext.Provider>
    )
}

export {ContactDetailContext, ContactDetailContextProvider}