import FoodListItem from '@/components/FoodListItem';
import { View,StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
    <View style={Styles.container}>
      <FoodListItem item={{label:"Pizza", cal:76,brand:"Dominus"}}/>
      <FoodListItem item={{label:"Apple", cal:136,brand:"Generic"}}/>
      <FoodListItem item={{label:"Pizza", cal:76,brand:"Dominus"}}/> 
      <FoodListItem item={{label:"Apple", cal:136,brand:"Generic"}}/>
      </View>
    </>

  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1,
    gap:10,
    justifyContent:"center",
    padding:10,
  }, })