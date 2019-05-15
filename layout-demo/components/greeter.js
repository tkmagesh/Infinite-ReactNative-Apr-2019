import React, { Component }  from 'react';
import { View, TextInput, TouchableOpacity, Button} from 'react-native';


export default class Greeter extends Component{
	 state = {
	    userName : '',
	    message : 'Another Dummy message'
	  };

	  constructor(){
	    super();
	    this.onGreetClick = this.onGreetClick.bind(this);
	  }

	  onUserNameChange = (userName) => {
	    this.setState({userName : userName});
	  }
	  onGreetClick(){
	    let message = `Hi ${this.state.userName}, Have a nice day!`;
	    this.setState({message});
	  }
	  render() {
	    return (
	      <View style={styles.main}>
	        <Text>User Name :</Text>
	        <TextInput style={styles.textInput} onChangeText={this.onUserNameChange}></TextInput>
	        <TouchableOpacity>
	          <Button title="Greet User" onPress={this.onGreetClick.bind(this)} />
	        </TouchableOpacity>
	        <Text>{this.state.message}</Text>
	      </View>
	    );
	  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin : 20
  },
  content: {
    padding: 20,
    margin: 20,
    backgroundColor: '#ef4c',    
    borderWidth: 1,
    borderColor: 'red',
    textAlign: 'center'
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  }
});