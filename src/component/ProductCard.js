import {View,Text, StyleSheet, Image} from 'react-native'

const styles = StyleSheet.create({
    productCard:{
        padding:10,
        margin:10,
        backgroundColor:'#f2f2f2',
    },
    productImage:{
        height:150,
        width:150,
    }
})

export default function ProductCard({product}) {

    
  return (
    <View style={styles.productCard}>
        <Image style={styles.productImage} source={{uri:product.image}}/>
        <Text>{product.title}</Text>
    </View>
  )
}
