import React from "react";
import { View,StyleSheet,Image,Text,ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import img from '../image/img6.jpeg'
import img1 from '../image/img1.jpeg'
import img2 from '../image/img5.jpeg'
import img3 from '../image/img7.jpeg'
import img4 from '../image/img8.jpeg'
import img5 from '../image/img8.jpeg'
const images= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
     require('../image/img1.jpeg'),
    //   require('../image/img3.jpeg'),
      require('../image/img5.jpeg'),
   ]
export default function product(){

return(
   
<ScrollView>
<View style={Styles.container}>
    <View style={{width:'100%',height:200,backgroundColor:'yellow'}}>
    <SliderBox images={images} autoplay />
    </View>
<View style={Styles.producttextview}>
<Text style={Styles.producttexthead}> product</Text>

</View>
<View style={{flexDirection:'row'}}>
<View style={Styles.productview}>
<View style={Styles.productviewin}>


    <Image source={require('../image/img1.jpeg')} style={Styles.productimg}/>
    <Text style={Styles.productimgtext}> Tea cup</Text>
</View>

</View>
{/* <View style={Styles.producttextview}>
<Text style={Styles.producttexthead}> product</Text>

</View> */}
<View style={Styles.productview}>
<View style={Styles.productviewin}>


    <Image source={require('../image/img1.jpeg')} style={Styles.productimg}/>
    <Text style={Styles.productimgtext}> Tea cup</Text>
</View>

</View>
{/* <View style={Styles.producttextview}>
<Text style={Styles.producttexthead}> product</Text>

</View> */}
<View style={Styles.productview}>
<View style={Styles.productviewin}>


    <Image source={require('../image/img1.jpeg')} style={Styles.productimg}/>
    <Text style={Styles.productimgtext}> Tea cup</Text>
</View>


</View>
</View>
<Image source={img} style={{width:'100%',height:200,marginVertical:10,}}/>
<Image source={img1} style={{width:'100%',height:200,marginVertical:10,}}/>
<Image source={img2} style={{width:'100%',height:200,marginVertical:10,}}/>
<Image source={img3} style={{width:'100%',height:200,marginVertical:10,}}/>
<Image source={img4} style={{width:'100%',height:200,marginVertical:10,}}/>

<View style={{width:'100%',height:200,backgroundColor:'yellow'}}>
    <SliderBox images={images} autoplay />
    </View>
    <Image source={img5} style={{width:'100%',height:200,}}/>

</View>
</ScrollView>

)

}
const Styles = StyleSheet.create({

    slider:{
            width:'100%',
            height:200,
            backgroundColor:'red'
    },
container:{


    flex:1,
    backgroundColor:'orange',
    

},
producttextview:{

    marginHorizontal:120,

},
producttexthead:{
    fontSize:30,
},
productviewin:{
    backgroundColor:'green',
    borderRadius:15,
    paddingHorizontal:5,
    paddingVertical:10,
    width:150,
    width:120,
    marginHorizontal:5,
    
},
productimgtext:{
    fontSize:30
},
productimg:{
    width:100,
    height:100,
    marginHorizontal:10,
},
productview:{

   marginVertical:5,
},

})