import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './screens/HomeScreen';
import CategoryScreen from './screens/CategoryScreen';
import WishlistScreen from './screens/WishlistScreen';
import CartScreen from './screens/CartScreen';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName={'Home'}>
        <Tab.Screen name={'Home'} component={HomeScreen} options={{
            tabBarIcon:()=>{
                return(
                    <AntDesign name="home" size={24} color="black" />
                )
            }
        }}/>
        <Tab.Screen name={'Category'} component={CategoryScreen} options={{
            tabBarIcon:()=>{
                return(
                    <AntDesign name="bars" size={24} color="black" />
                )
            }
        }}/>
        <Tab.Screen name={'Wishlist'} component={WishlistScreen} options={{
            tabBarIcon:()=>{
                return(
                    <AntDesign name="heart" size={24} color="black" />
                )
            }
        }}/>
        <Tab.Screen name={'Cart'} component={CartScreen} options={{
            tabBarIcon:()=>{
                return(
                    <AntDesign name="shoppingcart" size={24} color="black" />
                )
            }
        }}/>
    </Tab.Navigator>
  )
}
