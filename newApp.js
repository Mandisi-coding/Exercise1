import React from 'react';
import { AppRegistry,StyleSheet,Text, TextInput, View, WebView } from 'react-native';

export default class newapp extends React.Component {
    constructor(props){
        super(props);
    }
    handleChangeText=(typedText)=>{
    this.setState({WebView:typedText})
    }

  render() {
    return (
     <View>
     <TextInput style={
         {
         height:60,
         margin:30,
         padding:10,
         borderwidth:2
        
         }
         
     }

      keyboardType='email-address'
      placeholder='Enter URL'
      onChangeText={(text)=>this.setState({WebView})}
    
     />
     <WebView
        source={{uri: 'Textinput'}}
        style={{marginTop: 20}}
     />
     
    </View>
    );
  }
}
AppRegistry.registerComponent('exercise1',()=>newapp);