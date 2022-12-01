import { StyleSheet, Text, Button, TextInput, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput 
        placeholder='Place Anything'
        style={styles.input}
        
        />
        <Button 
        title='Add'/>
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputView : {
    width: '100%',
        padding: 20,
         flexDirection:'row',
         marginTop: 50,
         justifyContent: 'space-between',
         alignItems: 'center', 
  },
  input :{
    width: '80%',
    borderBottomWidth: 3,
    borderColor: 'blue',
    padding: 5,
  }
});
