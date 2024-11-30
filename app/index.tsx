import FoodListItem from '@/components/FoodListItem';
import { View,StyleSheet, Button,Text} from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const foodItems = [
  {label:"Pizza", cal:76,brand:"Dominus"},
  {label:"Apple", cal:36,brand:"Dominus"},
  {label:"Bread", cal:135,brand:"Dominus"},
  {label:"Coffee", cal:88,brand:"AmericanoGeneric"}
]



export default function HomeScreen() {
  
  const performSearch = ()=>{
    console.warn("Search for :",search)
  }

const[search,setSearch] = useState('')

  return (
    <>
      <View style={Styles.container}>
        <TextInput style={Styles.input} value={search} onChangeText={setSearch} placeholder='Search...' />
        {search && <Button  title='Search' onPress={performSearch}/>}
        <FlatList contentContainerStyle={{gap:5}}  data={foodItems} renderItem={({item})=>{return <FoodListItem item={item} />}}></FlatList>
      </View>
    </>

  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1,
    padding:10,
    gap:5,

  },
  input:{
    borderColor:"red",
    backgroundColor:"#f6f6f8",
    padding:10,
    color:"dimgray",
    borderRadius:5,

  },
})