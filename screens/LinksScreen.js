import React from 'react';
import {TextInput,UselessTextInput} from 'react-native'
import { ScrollView, StyleSheet,View } from 'react-native';
import {Input, Button} from 'react-native-elements';


import Icon from 'react-native-vector-icons/FontAwesome';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Email Spoof',
  };

  render() {
    return (
      <View style={styles.container}>
<Input
  placeholder='To-Email'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='red'
    />
  }
/>
<Input
  placeholder='From-Email'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='blue'
    />
  }
/>
<Input
  placeholder='Subject'
  leftIcon={
    <Icon
      name='envelope-square'
      size={24}
      color='black'
    />
  }
/>
<Input
  placeholder='Message'
  inputContainerStyle={
    styles.textBox
  }
/>

<Button
  title="SEND"
  titleStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{position: "absolute", bottom: 0,}}
/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  textBox:{
    height:100,
  }
});
