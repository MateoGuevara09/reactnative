import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './components/cuadradoscolores'
import TextInANest from './components/TextinAnest';
import Textinput from './components/TextInput';
import Botones from './components/botones';
import { Formulario } from './components/Formularioo';


export default function App() {
  return (
    <Formulario></Formulario>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
