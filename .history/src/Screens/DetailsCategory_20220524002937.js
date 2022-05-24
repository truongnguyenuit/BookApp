import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CategoryFilter from '../Components/CategoryFilter';
import BookOverview from '../Components/BookOverview';


const DetailsCategory = ({ route, navigation }) => {
    

    const [array, setarray] = useState(array1)
    //array1.push({ id : 4, value: "newyork"});


    const [booksArray, setBooksArray] = useState('')
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
            {/* quét database, chèn vào array, for array rồi đẩy vào text */}
            <Text>category: {categoryy}</Text>
            <View style={styles.imgcontainer}>
                <CategoryFilter book={categoryy} booksarray={booksArray} setbook={setBooksArray} navigation={navigation} />


                <Text>
                    {array.map((localstate, index) => (
                        <Text key={localstate.id}>{localstate.id} {localstate.value} </Text>
                    ))}
                </Text>

                <TouchableOpacity
                    style={{ backgroundColor: 'orange' }}
                    onPress={() => {
                        
                        setarray([...array, { id: 45, value: "Truon5g1" }])
                        //setarray(oldArray => [...oldArray,{ id: 45, value: "Truon5g1" }])
                    }}
                >
                    <Text>button</Text>
                </TouchableOpacity>



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