
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome/Welcome';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';




export default function App() {
let [fontsLoaded] = useFonts({
  "Poppins-Medium" : require("./assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Regular" : require("./assets/fonts/Poppins-Medium.ttf"),
})

if(!fontsLoaded){
  return <AppLoading/>;
}


  return (
    <Welcome/>
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
