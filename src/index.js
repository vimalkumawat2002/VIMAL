import React from "react";
import { Text,StyleSheet,Image,ScrollView } from "react-native";
import img from './image/img1.jpeg'
import img2 from './image/img2.jpeg'
import img3 from './image/img3.jpeg'
export default function app(){
return(
<>
<ScrollView>
<Text style={Styles.container}> vimal kumawat </Text>
<Text style={Styles.text}> vimal kumawat </Text>
<Image source={img} style ={{width:200,height:200,}}/>
<Image source={img2} style ={{width:200,height:200,}}/>
<Image source={img3} style ={{width:200,height:200,}}/>
<Image source={img2} style ={{width:200,height:200,}}/>
<Image source={img} style ={{width:200,height:200,}}/>
<Image source={img2} style ={{width:200,height:200,}}/>
<Image source={img} style ={{width:200,height:200,}}/>
<Image source={img2
} style ={{width:200,height:200,}}/>
<Image source={img3} style ={{width:200,height:200,}}/>
</ScrollView> 
</>
)

}
const Styles = StyleSheet.create({
container:{
fontSize:80,
backgroundColor:'red'

},
text:{
fontSize:20,
backgroundColor:'blue',
width:200,
height:200,

},


}) 