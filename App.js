import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { enableScreens } from 'react-native-screens'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducer'

const rootReducer = combineReducers({
    reducer: reducer,
})

const store = createStore(rootReducer)

import AppNavigator from './navigation/navigation'
enableScreens()
export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}
