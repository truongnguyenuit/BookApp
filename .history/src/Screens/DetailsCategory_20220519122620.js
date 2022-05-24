import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import CategoryFilter from '../Components/CategoryFilter';
impor

const DetailsCategory = ({ route, navigation }) => {
    const { categoryy } = route.params;
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
            <Text>asd {categoryy}</Text>
            <View style={styles.imgcontainer}>
            <BookOverview book={categoryy} navigation={navigation} />
            </View>

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

    },
    imgcontainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        
      },
})