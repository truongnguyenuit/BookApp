import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const DetailsCategory = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#ff8c00', '#ff8c00']}
                style={{ height: "20%" }}
            >


                <Text>asfasfasfasfas</Text>


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