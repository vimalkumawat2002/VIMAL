import React from "react";
import { View,StyleSheet,Text,Image,ScrollView } from "react-native";
import img from './image/img3.jpeg'
import img1 from './image/img4.jpeg'
import img2 from './image/img5.jpeg'
import img3 from './image/img6.jpeg'
import img4 from './image/img1.jpeg'
import img5 from './image/img2.jpeg'
import img6 from './image/img3.jpeg'

function home(){
return(
<>
<ScrollView>
<View style={Styles.container}>
<View style={Styles.headerview}>
<View style={Styles.logoview}>
    <Image source={require('../src/logo/logo2.png')} style={Styles.menuimage}/>
</View>
<View style={Styles.textview}>
    <Text style={Styles.textlogo}>vimalkumawat </Text>
</View>
<View style={Styles.logoview1}>
    <Image source={require('../src/logo/logo1.png')} style={Styles.menuimage1}/>
</View>
</View>
<View>
<Image source={img} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img1} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img3} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img4} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img5} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img6} style={{width:'100%',height:300,}}/>

</View>
<View style={Styles.imagegap}>
<Image source={img2} style={{width:'100%',height:300,}}/>

</View>
</View>


    

</ScrollView>
</>




)
}
export default home

const Styles = StyleSheet.create({
container:{
    flex:1,
  
   
  
  

},
headerview:{ 
    marginHorizontal:10,
    marginVertical:20,
    flexDirection:"row"


},
headviewtext:{

    fontSize:30,
   
},
menuimage:{
    width:30
},
logoview:{


// backgroundColor:'green'
 },
textlogo:{
   
   fontSize:30,
//    backgroundColor:'pink',
   marginHorizontal:10,
    marginVertical:-10,


},
logoview1:{
    marginHorizontal:10,
    
    
},
menuimage1:{
    width:30,
    marginHorizontal:40,
},
imagegap:{
    marginVertical:10,
}

})