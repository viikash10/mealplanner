import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const DateScreen = () => {
    
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
      <TouchableOpacity>
      <AntDesign name="banckward" size={30} color="whitesmoke" />
      </TouchableOpacity>
      
      <TouchableOpacity>
      <AntDesign name="forward" size={30} color="whitesmoke" />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default DateScreen

const styles = StyleSheet.create({
       container: {
        width: '100%',
        height: 100,
        borderRadius: 5,
        backgroundColor: '#98EECC',
        // alignItems: 'center'
    },
    container1 :{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 30,
        
       
    }
})