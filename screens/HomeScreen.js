import React from 'react'
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

import Data from '../Data'

const Screen = (props) => {
    const windowWidth = Dimensions.get('window').width
    const windowHeight = Dimensions.get('window').height
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                style={styles.flatList}
                numColumns={2}
                horizontal={false}
                data={Data}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    justifyContent: 'space-around',
                    paddingLeft: 20,
                    paddingVertical: 20,
                }}
                renderItem={(itemData) => (
                    <TouchableWithoutFeedback
                        onPress={() => {
                            props.navigation.navigate(itemData.item.screenName)
                        }}
                    >
                        <View
                            style={{
                                width: windowWidth / 2 - 30,
                                height: 200,
                                backgroundColor: itemData.item.color,
                                marginRight: 20,
                                marginBottom: 20,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 5,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 19,
                                    fontWeight: 'bold',
                                    color: 'white',
                                }}
                            >
                                {itemData.item.screenName}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    flatList: {
        flex: 1,
        // padding: 10,
    },
})

export default Screen
