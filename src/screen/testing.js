import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
export default function testing(){

    return(

        <View style={Styles.container}>
<Text style={{fontSize:30,backgroundColor:'blue'}}>hallo kumawat  </Text>

        </View>
    )
}
const Styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"pink"
    },
})