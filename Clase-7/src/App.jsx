import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'

export default function App() {
    return (
        <Routes>
            <Route
                path='/'
                element={<HomeScreen/>}
            />
            <Route
                path='/login'
                element={<LoginScreen/>}
            />
        </Routes>
    )
}
