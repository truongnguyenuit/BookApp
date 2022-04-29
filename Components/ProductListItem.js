import react from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { formatPrice } from '../utils/Number';

export default function ProductListItem(props) {
    const { product, onAddToCardClick } = props;

    return (
        <View style={styles.shadow}>
            <View style={styles.container}>
                <Image style={styles.img} source={{ url: product.images[0].url }} />
                <View style={styles.info}>
                    <Text style={styles.name}>{product.name}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.price}>{formatPrice(product.price)}</Text>
                        <TouchableOpacity onPress={onAddToCardClick}>
                            <Text style={ styles.cartText}>MUA +</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cartText: {
        textTransform: 'uppercase',
        fontSize: 16,
        color: '#2f95dc'
    },
    shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 }
    },
    container: {
        
        borderRadius: 4,
        backgroundColor: '#FFF',
        overflow:'hidden',
    },
    info: {
        padding: 8,

    },
    img: {
        height: 150,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5
    },
    name: {
        fontSize: 16,
        marginBottom: 8
    },
    priceRow:{
        flexDirection: 'row',
        alignItems: 'center'

    },
    price: {
        fontSize: 16,
        color: '#888',
        flex: 1
    }
});