import React from "react";
import { Text,StyleSheet,View,Image } from "react-native";
import img from '../image/img6.jpeg'
import img1 from '../image/img5.jpeg'
import{  SliderBox }  from "react-native-image-slider-box"
const images =[

require('../image/img1.jpeg'),
require('../image/img8.jpeg'),
require('../image/img2.jpeg'),
require('../image/img3.jpeg'),
require('../image/img4.jpeg'),
require('../image/img6.jpeg'),


]
export default function slider(){

return(
<>
<View style={{width:'100%',height:200,backgroundColor:'red', marginVertical:10,}}>
<SliderBox images={images} autoplay />
</View>
<View style={Styles.container}>
<Text style={Styles.texthead}> vimal kumawat</Text>
<Image source={img} style={{width:'100%',height:200}}/>
<Text style={Styles.texthead}> annu yadav</Text>
<Image source={img1} style={{width:'100%',height:200}}/>
</View>

</>
)


}
const Styles =StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'pink'
},
texthead:{
fontSize:40,
backgroundColor:'blue'

},

})