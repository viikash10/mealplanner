import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style, { colors } from '../globals/style'
import Weeklybalanced from './planner/Weeklybalanced'
import Weeklylowcarb from './planner/Weeklylowcarb' 
import Weeklylowfat from './planner/Weeklylowfat'

const Weeklyplan = ({navigation}) => {
  

    const weeklybalanced = () => {
        navigation.navigate('Weeklybalanced')
      }

      const weeklylowcarb = () => {
        navigation.navigate('Weeklylowcarb')
      }

      const weeklylowfat = () => {
        navigation.navigate('Weeklylowfat')
      }


  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.headtxt}>
            Choose Diet Preference
        </Text>
        <View style={styles.container2}>
            <TouchableOpacity
            onPress={()=>{
                weeklybalanced() ;
            }}
            >
                <View style={styles.card}>
                    <View style={styles.s1}>
                        <Text style={styles.txt}>Balanced Diet</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
                weeklylowcarb() ;
            }}
            >
                <View style={styles.card}>
                    <View style={styles.s1}>
                        <Text style={styles.txt}>Low-Carb </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=>{
                weeklylowfat() ;
            }}
            >
                <View style={styles.card}>
                    <View style={styles.s1}>
                        <Text style={styles.txt}>Low-Fat </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Weeklyplan ;

const styles = StyleSheet.create({
    container: {
        marginTop: 45
    },
    headtxt: {
    color: colors.text3,
    width: '90%',
    fontSize: 32,
    fontWeight: '200',
    borderRadius: 10,
    marginLeft: 23,
   
    },
    container2: {
        margin: 20,
    },
    card: {
        width:   '100%',
        height: 150,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
        marginVertical: 10,
        justifyContent: 'center',
        
     },
     txt: {
        textAlign: 'center',
        fontSize:  30,
        fontWeight: '200'
        
     }
})