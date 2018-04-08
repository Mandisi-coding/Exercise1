import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import {stackNavigator}from 'react-native';


export default class screenOne extends React.Component {

    title: firstScreen,
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={styles.container}>

            <TextInput
            placeHolder="please enter username" 
            style={style.input}/>
            <TextInput
            placeHolder="please enter password" 
            style={style.input}/>
<TouchableOpacity>
           <Text>SAVE</Text> 
           onClick={()=>navigate'secondScreen'}>navigate to second screen
</TouchableOpacity>
           
     </View>
        );
    }
}


export default class screenTwo extends React.Component {

    title: secondScreen,
    render(){
        const {navigate}=this.props.navigation;
        return(
            <View style={styles.container}>
            <TouchableOpacity>
              <Text>Page1</Text>  
                onClick={()=>navigate'firstScreen'}
            </TouchableOpacity>
           </View>
        );
    }
}


const navApp = stackNavigator({
    first :{screen: firstScreen},
    second :{ screen: secondScreen},
})

export default class Navigation extends React.Component {
  render() {
    return <navApp/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  input:50
  marginBottom:10
});
