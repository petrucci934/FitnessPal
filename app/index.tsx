import FoodListItem from '@/components/FoodListItem';
import { View,StyleSheet} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const foodItems = [
  {label:"Pizza", cal:76,brand:"Dominus"},
  {label:"Apple", cal:36,brand:"Dominus"},
  {label:"Bread", cal:135,brand:"Dominus"},
  {label:"Coffee", cal:88,brand:"AmericanoGeneric"}
]

export default function HomeScreen() {
  return (
    <>
    <View style={Styles.container}>
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
  },

})