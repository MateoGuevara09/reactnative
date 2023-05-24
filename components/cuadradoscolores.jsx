import  React from "react";
import { View, Text } from "react-native";

const ViewBoxesWithColorAndText = () => {
    return (
        <View style={{flexDirection: "row",height: 100,padding: 20}}>
            <View style={{ backgroundColor: "blue", flex: 0.3,height:90,padding:20 }}/>
            <View style={{ backgroundColor: "red", flex: 0.5,height:90,padding:20 }}/>
            <Text>eso tilin</Text>
        </View>
    )
}

export default ViewBoxesWithColorAndText;