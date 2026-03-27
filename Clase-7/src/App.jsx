import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import NotFoundScreen from './Screens/NotFoundScreen/NotFoundScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'

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
            <Route 
                path='/*'
                element={<NotFoundScreen/>}
            />
            <Route 
                path={'/product/:product_id'}
                element={<ProductDetailScreen/>}
            />
        </Routes>
    )
}
