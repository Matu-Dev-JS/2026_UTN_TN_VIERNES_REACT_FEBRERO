import { useState } from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import { ContactsContextProvider } from './Context/ContactsContext'
import { ContactDetailContext, ContactDetailContextProvider } from './Context/ContactDetailContext'



function App() {
  
  return (
    <>
      <ContactsContextProvider>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route element={<ContactDetailContextProvider />} > 
            <Route path='/contact/:contact_id' element={<ContactDetailScreen />} />
          </Route>
        </Routes>
      </ContactsContextProvider>
    </>
  )
}

export default App
