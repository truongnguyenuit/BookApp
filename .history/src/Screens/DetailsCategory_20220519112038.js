import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const DetailsCategory = ( route ) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ff8c00', '#ff8c00']}
                style={{ height: "20%" }}
            >
                <View style={styles.titleContainer}>
                    <View style={styles.title}>
                        <Text style={{ fontSize: 38, color: "#2d3436" }}>Book <Text style={{ fontSize: 38, color: "white" }}>Categories</Text></Text>
                    </View>
                </View>

            </LinearGradient>

        </View>
    )
}

export default DetailsCategory

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})