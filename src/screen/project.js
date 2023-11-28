import React from "react";
import { Text,StyleSheet,View,Image,ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const images =[

    require('../logo/logo2.jpeg'),
require('../logo/logo3.jpeg'),
require('../logo/logo4.jpeg'),

require('../image/img4.jpeg'),
require('../image/img6.jpeg'),
]
 export default function project(){

return(
    <>
    <ScrollView>
<View style={Styles.container}>
<View style={Styles.menuimg}>

    <Image source={require('../logo/logo2.png')} style={Styles.menuimage}/>
<View style={Styles.notiimg}>
    <Image source={require('../logo/logo3.png')} style={{width:40,}}/>
</View>

</View>

<View style={Styles.headertext}>
<Text style={Styles.text}> Mob Wallet</Text>
<View style={Styles.sideimg}>
<Image source={require('../logo/img4.png')} style={{width:20}}/>

</View>
<View style={{width:'100%',height:300, marginVertical:40,marginHorizontal:-20}}>
<SliderBox images={images} autoplay />
<View style={Styles.main}>

<Text style={Styles.maintext}> Send Money to </Text>
</View>
<View style={Styles.main2}>
    <Text style={Styles.maintext2}> See all </Text>
</View>

    </View>
    

</View>


<View style={Styles.topicmain}>
<ScrollView style={Styles.topicmain} horizontal> 
<View  style={Styles.main3}>
<Image source={require('../logo/img4.png')} style={{marginHorizontal:20,}}/>
<Text style={{marginHorizontal:10, marginVertical:10}}> add  money </Text>
</View>

<View style={Styles.main5}>
<View style={Styles.main5img}>
    <Image source={require('../logo/logo11.png')} style={{marginHorizontal:15, marginVertical:10,}}/>
</View>
    <Text style={Styles.main5text1}>
        vimal
    </Text>

</View>

<View style={Styles.main6}>
<View style={Styles.main5img}>
    <Image source={require('../logo/logo11.png')} style={{marginHorizontal:15, marginVertical:10,}}/>
</View>
    <Text style={Styles.main5text1}>
        vimal 
    </Text>

</View>

<View style={Styles.main7}>
<View style={Styles.main5img}>
    <Image source={require('../logo/logo11.png')} style={{marginHorizontal:15, marginVertical:10,}}/>
</View>
    <Text style={Styles.main5text1}>
        vimal
    </Text>

</View>
<View style={Styles.main8}>
<View style={Styles.main5img}>
    <Image source={require('../logo/logo11.png')} style={{marginHorizontal:15, marginVertical:10,}}/>
</View>
    <Text style={Styles.main5text1}>
        vimal
    </Text>

</View>


























</ScrollView>








</View>

<View style={Styles.topicmain1}>

<View style={Styles.main9}>
<Text style={Styles.main9text}> Recant tranction</Text>

</View>
<View style={Styles.main9img}>
<Image source={require('../logo/img12.png')} style={{marginVertical:-40,}}/>

</View>

</View>
</View>
</ScrollView>



</>

)


 }
 const Styles = StyleSheet.create({

container:{
    flex:1,

},
main9img:{
marginHorizontal:20,
marginLeft:'auto',

},
main9:{
marginHorizontal:10,
marginVertical:20,
},

main9text:{
fontSize:20
},
main5:{
    backgroundColor:'blue',
    width:70,
    marginVertical:10,
    marginHorizontal:10,
},
main6:{
    backgroundColor:'pink',
    width:70,
    marginVertical:10,
    marginHorizontal:10,
},
main7:{
    backgroundColor:'green',
    width:70,
    marginVertical:10,
    marginHorizontal:10,
},
main8:{
    backgroundColor:'green',
    width:70,
    marginVertical:10,
    marginHorizontal:10,
},
main5text1:{
marginHorizontal:15,
},
main3:{
    backgroundColor:'red',
    width:70,
    marginHorizontal:10,
},
menuimg:{
    marginHorizontal:10,
    marginVertical:10,
    marginVertical:10,
   
    
},
notiimg:{

marginLeft:"auto",
marginVertical:-25,

},
headertext:{

    marginHorizontal:10,
    marginVertical:20,
},
text:{
    fontSize:30,
    
},
sideimg:{
    marginLeft:"auto",
    marginVertical:-15
},
main:{

marginHorizontal:20,
marginVertical:20
},
maintext:{

fontSize:20,

},
maintext2:{

    fontSize:10,
    
    },
main2:{
marginLeft:"auto",
marginHorizontal:10,
marginVertical:-30,
},
main4:{
marginVertical:10,
backgroundColor:'pink',
width:70,
borderRadius:10,

},
maintopic:{

backgroundColor:'white',
width:70

},
maintext3:{
    marginHorizontal:10,
},


maintext1:{
    fontSize:20,
},
maintextimg:{

marginLeft:'auto',
marginTop:-30  
},
text1:{

    marginHorizontal:30,
    marginVertical:40,
    backgroundColor:'skyblue'
},
text2:{

    fontSize:20,
},
text3:{
fontSize:20,
marginLeft:'auto',


},
sidemoney:{
    marginTop:-25, 
    
},
topicmain:{
    flexDirection:"row"
}
 })