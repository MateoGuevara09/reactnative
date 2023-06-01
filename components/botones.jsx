import React, {useState} from "react";
import  {StyleSheet, Button, View, SafeAreaView, Text, Alert} from 'react-native';

const Separator = () =>(
    <View style={StyleSheet.Separator} />
);

const botones = () => {
return(

<SafeAreaView style={styles.container}>
<View>
<Text style={styles.title}>the title and onpres handler are required</Text>
<Button title="Press me" onPress={() => Alert.alert('Simple button pressed')}></Button>
</View>
<Separator />
<View>
    <Text style={styles.title}>adjust the color in a way that looks standar on each plataform</Text>
    <Button title="Press me" color="#f194ff" onPress={() => Alert.alert('button with adjusted color pressed')}></Button>
</View>
<Separator />
<View>
    <Text style={styles.title}>All interaction for the component are disabled</Text>
    <Button title="Press me" disabled onPress={() => Alert.alert('Cannot press this one')}></Button>
</View>
<Separator />
<View>
    <Text style={styles.title}>This layout strategy lets the title define the width of the button</Text>
    <View style={styles.fixToText}>
        <Button title="Left button" onPress={() => Alert.alert('Left button pressed')}></Button>
        <Button title="Right button" onPress={() => Alert.alert('right button pressed')}></Button>
    </View>
</View>

</SafeAreaView>
);
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginHorizontal:16,
    },
    title:{
        textAlign:'center',
        marginVertical:8,
    },
    fixToText:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator:{
        marginVertical:8,
        borderBottomColor:'#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
export default botones;