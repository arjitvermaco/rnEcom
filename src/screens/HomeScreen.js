import { useEffect, useState } from "react";
import { ScrollView,View, Text, Image , StyleSheet} from "react-native";
import ProductCard from "../component/ProductCard";


const styles = StyleSheet.create({
  container:{
    padding:50
  },
  productImage: {
    width: 200,
    height: 200,
  }
})

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    setProducts(data);
  }

  return (
    <ScrollView>
   
    
      {products.map((item) => {
        return (
          <ProductCard product={item}/>
        );
      })}
    </ScrollView>
  );
}
