import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'

import { SharedElement } from 'react-navigation-shared-element'
const { width, height } = Dimensions.get('window')

import { useSelector } from 'react-redux'

const InstagramDetailsScreen = ({ route, navigation }) => {
    const { item } = route.params

    // const picture = useSelector((state) => state.reducer.id)

    return (
        <View
            style={{
                height: 300,
                width: width,
                backgroundColor: 'transparent',
            }}
        >
            <SharedElement id={item.id}>
                <Image
                    source={item.picture}
                    style={{ height: 300, width: width }}
                    resizeMode="cover"
                />
            </SharedElement>
        </View>
    )
}

// InstagramDetailsScreen.sharedElements = () => {
//     return [item.id]
// }

const styles = StyleSheet.create({})

export default InstagramDetailsScreen
