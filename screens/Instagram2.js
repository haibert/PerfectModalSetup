import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    // Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Dimensions,
    Modal,
} from 'react-native'

import images from '../data/images'

import { SharedElement } from 'react-navigation-shared-element'

//redux
import { passProps } from '../reducer'
import { useDispatch } from 'react-redux'

// import CreateAnimRef from '../components/useCreateAnimRef'

/* age summary:
on android when you call measure.() using ref it doesn't give you the x, and y, 
but it gives you dx, and dy. thats why we use that instead and minus it by half 
of the images height plus 5, idk why the plus 5 has to be there but without it 
goes lower on the closing animation. Also you must add onLayout={()=>{}} or else 
the ref doesn't work

For ios you have to account for the y axis position of the scroll view for the 
pictures that are beyond the range of the screen. thats why you're subtracting 
the y axis from them. In the course he didn't face this but go figure. also shout 
out to useRef for providing the y axis without causing re-renders.

the useDidMountEffect is awesome and is build to run after the activeImage and 
Index is set up.
*/
const { width, height } = Dimensions.get('window')

const Instagram = (props) => {
    const dispatch = useDispatch()

    function imagePressedHandler(item) {
        dispatch(passProps(item))
        props.navigation.navigate('InstagramDetailsScreen', {
            item,
        })
    }
    return (
        <View style={styles.container}>
            <ScrollView
                style={styles.container}
                scrollEventThrottle={9}
                bounces={false}
            >
                <View style={styles.grid}>
                    {images.map((item, index) => {
                        return (
                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => {
                                    imagePressedHandler(item)
                                }}
                            >
                                <SharedElement id={item.id}>
                                    <Image
                                        style={{
                                            width: width / 3,
                                            height: 150,
                                        }}
                                        resizeMode="cover"
                                        source={item.picture}
                                        onLayout={() => {}}
                                    />
                                </SharedElement>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    gridImage: {
        height: 150,
    },
    viewImage: {
        width: null,
        height: null,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    topContent: {
        flex: 1,
    },
    content: {
        flex: 2,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 28,
    },
    close: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    closeText: {
        backgroundColor: 'transparent',
        fontSize: 35,
        color: '#FFF',
    },
})

export default Instagram
