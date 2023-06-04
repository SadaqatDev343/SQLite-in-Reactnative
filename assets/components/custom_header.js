import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity ,Button} from 'react-native';

//import Ionicons from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome5';
const CustomHeader = () => {
  return (
    <View style={styles.container}>
         <View style={{paddingLeft:18}}>
         <Icon name="long-arrow-alt-left" size={30} color="black" />
        </View>
        <View style={{paddingLeft:90}}>
           <Text>Taliwat UI Quran</Text> 
        </View>
       
        <View style={{paddingBottom:5,paddingLeft:80}}>
        <Icon name="cog" size={30} color="black" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: 'black',
    width:365,
    backgroundColor:'white'


  },
 
  rightIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 30,
    marginLeft: 16,
  },
  share: {
    width: 35,
    height: 35,
   paddingLeft:10,
    backgroundColor:'black',
    paddingBottom:20,
    
  },
  frv: {
    width: 35,
    height: 35,
    backgroundColor:'black',
    paddingLeft:10
   
  },
  back: {
    width: 20,
    height: 20,
    backgroundColor:'black',
    alignItems:'center',
   
  },
});

export default CustomHeader;
