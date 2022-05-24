import { StyleSheet, Text, View, LinearGradient } from 'react-native'
import React from 'react'

const DetailsCategory = ({navigation}) => {
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
        flex: 1,
      },
      title: {
        flexDirection: 'row',
        fontWeight: '800',
        color: '#2d3436',
        paddingHorizontal: 30,
      },
      card: {
        height: 150,
        marginVertical: 5,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
      cardImgWrapper: {
        flex: 1,
      },
      cardImg: {
        height: "100%",
        width: "100%",
        alignSelf: 'center',
        borderRadius: 8
    
      },
      titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
      },
      cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderBottomRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor:'#FFF'
      },
      cardTitle: {
        fontWeight: 'bold',
      },
      cardDetails: {
        fontSize: 12,
        color: '#444',
      }
})