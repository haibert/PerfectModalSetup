import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import HomeScreen from '../screens/HomeScreen'
import Instagram2 from '../screens/Instagram2'
import InstagramDetailsScreen from '../screens/InstagramDetailsScreen'

const MainStackShared = createSharedElementStackNavigator()
const MainStack = createStackNavigator()

const ModalStackNav = () => {
    return (
        <MainStackShared.Navigator
            mode="modal"
            initialRouteName="Instagram2"
            screenOptions={{
                gestureResponseDistance: {
                    vertical: 1000,
                },
                gestureDirection: 'vertical',
            }}
        >
            <MainStackShared.Screen name="Instagram2" component={Instagram2} />

            <MainStackShared.Screen
                name="InstagramDetailsScreen"
                component={InstagramDetailsScreen}
                options={() => ({
                    useNativeDriver: true,
                    gestureEnabled: true,
                    gestureResponseDistance: {
                        vertical: 800,
                    },
                    gestureDirection: 'vertical',
                    cardStyleInterpolator: ({ current: { progress } }) => {
                        return {
                            cardStyle: {
                                opacity: progress,
                            },
                        }
                    },
                    // transitionSpec: {
                    //     open: {
                    //         animation: 'timing',
                    //         config: {
                    //             duration: 500,
                    //         },
                    //     },
                    //     close: {
                    //         animation: 'timing',
                    //         config: {
                    //             duration: 500,
                    //         },
                    //     },
                    // },
                })}
                sharedElementsConfig={(route) => {
                    const { item } = route.params
                    // return SomeArray.map((item) => item.id)
                    return [
                        {
                            id: `${item.id}`,
                            // animation: 'fade',
                            // resize: 'clip',
                            // align: 'left-top',
                        },
                    ]
                }}
            />
        </MainStackShared.Navigator>
    )
}

const RegularStack = () => {
    return (
        <MainStack.Navigator>
            <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        </MainStack.Navigator>
    )
}
const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                // mode="modal"
                screenOptions={{
                    headerShown: false,
                    gestureResponseDistance: {
                        vertical: 1000,
                    },
                    gestureDirection: 'vertical',
                }}
            >
                <MainStack.Screen
                    name="RegularStack"
                    component={RegularStack}
                />

                <MainStack.Screen
                    name="ModalStackNav"
                    component={ModalStackNav}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

// PERFECT MODAL WORKING EXAMPLE

// const ModalStackNav = () => {
//     return (
//         <MainStackShared.Navigator
//             mode="modal"
//             screenOptions={{
//                 gestureResponseDistance: {
//                     vertical: 1000,
//                 },
//                 gestureDirection: 'vertical',
//             }}
//         >
//             <MainStackShared.Screen
//                 name="InstagramDetailsScreen"
//                 component={InstagramDetailsScreen}
//                 options={() => ({
//                     useNativeDriver: true,
//                     gestureEnabled: true,
//                     gestureResponseDistance: {
//                         vertical: 800,
//                     },
//                     gestureDirection: 'vertical',
//                     // cardStyleInterpolator: ({ current: { progress } }) => {
//                     //     return {
//                     //         cardStyle: {
//                     //             opacity: progress,
//                     //         },
//                     //     }
//                     // },
//                     // transitionSpec: {
//                     //     open: {
//                     //         animation: 'timing',
//                     //         config: {
//                     //             duration: 500,
//                     //         },
//                     //     },
//                     //     close: {
//                     //         animation: 'timing',
//                     //         config: {
//                     //             duration: 500,
//                     //         },
//                     //     },
//                     // },
//                 })}
//                 // sharedElementsConfig={(route) => {
//                 //     const { item } = route.params
//                 //     // return SomeArray.map((item) => item.id)
//                 //     return [
//                 //         {
//                 //             id: `${item.id}`,
//                 //             // animation: 'fade',
//                 //             // resize: 'clip',
//                 //             // align: 'left-top',
//                 //         },
//                 //     ]
//                 // }}
//             />
//         </MainStackShared.Navigator>
//     )
// }

// const RegularStack = () => {
//     return (
//         <MainStack.Navigator>
//             <MainStack.Screen name="HomeScreen" component={HomeScreen} />
//             <MainStack.Screen name="Instagram2" component={Instagram2} />
//         </MainStack.Navigator>
//     )
// }
// const AppNavigator = (props) => {
//     return (
//         <NavigationContainer>
//             <MainStack.Navigator
//                 mode="modal"
//                 screenOptions={{
//                     headerShown: false,
//                     gestureResponseDistance: {
//                         vertical: 1000,
//                     },
//                     gestureDirection: 'vertical',
//                 }}
//             >
//                 <MainStack.Screen
//                     name="RegularStack"
//                     component={RegularStack}
//                 />

//                 <MainStack.Screen
//                     name="ModalStackNav"
//                     component={ModalStackNav}
//                 />
//             </MainStack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default AppNavigator
