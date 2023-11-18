import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons,AntDesign,FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import style, { colors } from '../globals/style';

const BottomNav = ({navigation}) => {
  return (
    <View style={styles.container}>
       
    <View style={styles.btncon1}>
       <AntDesign name="home" size={35} color="black" style={styles.icon1}
      onPress={() => { navigation.navigate('Home') }}
      />
    </View>

    <View style={styles.btncon1}>
    <Feather name="search" size={35} color="black" style={styles.icon1}/>
    </View>
    
    <View style={styles.btncon1}>
    <Entypo name="sports-club" size={35} color="black" />
    </View>

    <View style={styles.btncon1}>
    <AntDesign name="setting" size={35} color="black" />
    </View>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 35,
        borderTopColor: 'grey',
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        
    }
})