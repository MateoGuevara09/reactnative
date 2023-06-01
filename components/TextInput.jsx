import React,{ useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native-web";


const UselessTextInput = () =>{
    const [text, onChargeText] = useState(null);
    const [number, onChargeNumber] = useState(null);

    return(
        <SafeAreaView>
            <TextInput 
            style={styles.input}
            onChargeText={onChargeText}
            value={text}
            placeholder="Useless Text"
        />
<TextInput
style={styles.input}
onChargeText={onChargeNumber}
value={number}
placeholder="useless placeholder"
keyboardType="numeric"
/>
</SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default UselessTextInput;