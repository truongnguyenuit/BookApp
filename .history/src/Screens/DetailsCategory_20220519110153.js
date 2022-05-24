import { StyleSheet, Text, View, LinearGradient } from 'react-native'
import React from 'react'

const DetailsCategory = ()  => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ff8c00', '#ff8c00']}
                style={{ height: "20%" }}
            >
                <View style={styles.titleContainer}>
                    
                        <Text>asfasfasfasfas</Text>
                    
                </View>
            </LinearGradient>
            
        </View>
    )
}

export default DetailsCategory

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})