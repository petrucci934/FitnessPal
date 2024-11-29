import { View,Text,StyleSheet } from "react-native"
import {AntDesign} from '@expo/vector-icons';


interface FoodItemProps{
    item:{
      label:string,
      cal: number,
      brand:string
    }
  }

const FoodListItem = ({ item }: FoodItemProps): JSX.Element =>{
    return (
            <View style={Styles.container}>
              <View style={Styles.texContainer}>
                <Text style={Styles.text}>{item.label}</Text>
                <Text style={Styles.textInfo}>{item.cal} cal. {item.brand}</Text>
              </View>
              <AntDesign style={Styles.icon} name='pluscircleo'></AntDesign>
            </View>  
    )
  }


const Styles = StyleSheet.create({  
    container:{
      alignItems:"center",
      backgroundColor:"gainsboro",
      borderRadius:5,
      flexDirection:"row",
      gap:5,
      justifyContent:"space-between",
      padding:10,
    },
    texContainer:{
      flex:1,
      gap:5
    },
    text:{
      fontSize:16,
      fontWeight:"bold",
    },
    textInfo:{
      color:"dimgray",
      
      
    },
    icon:{
      fontSize:24,
      color:"royalblue"
    }
  })
  export default FoodListItem;