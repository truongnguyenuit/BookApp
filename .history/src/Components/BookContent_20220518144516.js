import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { connect } from 'formik'

export default function BookContent({ route, navigation }) {
    const { img, name, author, content } = route.params
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.author}>by: {author}</Text>
            <Text style={styles.content}>      {content}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                >
                <Text style={styles.textButton}>Back To Home</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingVertical: 50,
    },
    title: {

        fontWeight: 'bold',
        fontSize: 20,
        justifyContent: "space-between",
        alignItems: 'center',
        textAlign: 'center'
    },
    author: {
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 20,
    },
    buttonContainer: {
        alignItems:'flex-start',

    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 13,
        borderRadius: 50,
        marginTop: 150,
    },
    textButton: {
        fontWeight:'bold',
        color: 'white'

    }

})