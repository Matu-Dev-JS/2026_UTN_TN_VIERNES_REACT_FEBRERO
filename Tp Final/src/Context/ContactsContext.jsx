import { createContext, useState } from "react";
import contacts from "../data/contactData";


const ContactsContext = createContext()


const ContactsContextProvider = ({children}) => {
    //El estado que guarda el valor de lista de mis contactos
    const [contacts_state, setContactState] = useState(contacts)

    //Valores que mi contexto va a proveer, por ende todos los componentes hijos de este contexto van a poder acceder a esta informacion


    function addNewContact ( name, nro_tel, email){
        const new_contact = {
            id: contacts_state.length + 1,
            name,
            nro_tel,
            email,
            profile_img: "https://via.placeholder.com/150",
            last_time_contacted: new Date( "2022-10-20" ),
            messages: []
        }
        setContactState(
            (current_state) =>  [...current_state, new_contact]
        )
    }

    function deleteContactById(contact_id){
        setContactState(
            (current_state) => current_state.filter((contact) => contact.id !== contact_id)
        )
    }
    const provider_value = {
        contacts_state,
        addNewContact,
        deleteContactById
    }
    return (
        <ContactsContext.Provider value={provider_value}>
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContextProvider, ContactsContext}