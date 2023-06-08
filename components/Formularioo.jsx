import React,{useState} from "react";
import  {StyleSheet, Button, View, Text, Alert,TextInput} from 'react-native';

export const Formulario = () => {
    const [text, onChangeText] = useState('');
    const [showText, setShowText] = useState(false);
  
    const handleButtonPress = () => {
      setShowText(true);
    };
  
    const handleTextChange = (newText) => {
      onChangeText(newText);
      setShowText(false);
    };
  
    return (
      <View>
        <View style={Styles.cuadrado}>
          <TextInput
            style={Styles.input}
            onChangeText={handleTextChange}
            value={text}
            placeholder="Ingrese texto"
          />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={handleButtonPress}
          />
          {showText && <Text>{text}</Text>}
        </View>
      </View>
    );
  };
const Styles = StyleSheet.create({
    cuadrado:{
        height:150,
        margin:12,
        borderWidth:1,
        padding:10,
    },
    input: {
        height: 40,
        width:200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
})
