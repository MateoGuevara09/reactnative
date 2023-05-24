import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './components/cuadradoscolores'

export default function App() {
  return (
    <ViewBoxesWithColorAndText></ViewBoxesWithColorAndText>
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
