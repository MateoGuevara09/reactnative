import React,{ useState } from "react";
import { Text,StyleSheet } from "react-native";

const TextInANest = () =>{
    const [titleText,setTitleText] = useState("Bird's nest");
    const bodyText = "this is not really a bird nest.";

    const onPressTitle = () => {
        setTitleText("bird's nest [pressed]")
    };
    return {
    };
};

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default TextInANest;