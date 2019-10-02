import React from 'react';
import {
  Button,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class UserInfoScreen extends React.Component {
  static navigationOptions = {
    drawerIcon: () => (
      <Image source={require('./HomeIcon.png')} style={styles.image} />
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#5352ed',
            marginTop: 10,
            marginBottom: 10,
            fontSize: 30,
            alignContent: 'center',
          }}>
          Tell us a bit about Yourselft
        </Text>
        <Text style={{fontWeight: 'bold', color: '#3742fa', marginTop: 10}}>
          Mandatory
        </Text>

        <View style={{padding: 20}}>
          <Text>select your status</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Student', value: 'student '},
              {label: 'Employee', value: 'employee'},
              {label: 'Senior Citizen', value: 'senior citizen'},
            ]}
          />
        </View>

        <View style={{padding: 20}}>
          <Text>If Student, you're a..</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'School Student', value: 'school student '},
              {label: 'University Student - Private', value: 'university student - private'},
              {label: 'University Student - Government', value: 'university student - government'},
            ]}
          />
        </View>

        <View style={{padding: 20}}>
          <Text>If Employee, you're from..</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'Private Sector', value: 'private sector'},
              {label: 'Government Sector', value: 'government sector'},
              
            ]}
          />
        </View>
        
        <Text style={{fontWeight: 'bold', color: '#5352ed'}}>Optional</Text>

        <View style={{padding: 20}}>
          <Text>Your income level is..</Text>
          <RNPickerSelect
            onValueChange={value => console.log(value)}
            items={[
              {label: 'High-level', value: 'high-level'},
              {label: 'Mid-level', value: 'mid-level'},
              {label: 'Low-level', value: 'low-level'},
              
            ]}
          />
        </View>

        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Plans')}>
            <Text style={styles.ButtonText}>Next</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
  container: {
    paddingHorizontal: 10,
    padding: 25,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#dfe4ea',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 260,
    borderRadius: 14,
  },
  ButtonText: {
    fontWeight: 'bold',
  },
});