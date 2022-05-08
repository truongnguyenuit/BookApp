import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const StarRating = (props) => {
    let stars =[];
    for (var i=1;i<= 5;i++){
        let name = 'ios-star';
        if (i > props.rating){
            name = 'ios-star-outline';
        }

        stars.pust((<Ionicons name={name} size={15} style={style.star} key={i}/>))
    }
    return (
        <View style={ StyleSheet.container}
    )

}