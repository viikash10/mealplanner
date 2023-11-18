import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import style, { colors } from '../globals/style'
import Dailybalanced from './planner/Dailybalanced'
import Dailylowcarb from './planner/Dailylowcarb'
import Dailylowfat from './planner/Dailylowfat'


const DailyPlan = ({navigation}) => {

    const dailybalanced = () => {
        navigation.navigate('Dailybalanced')
      }

      const dailylowcarb = () =>{
        navigation.navigate('Dailylowcarb')
      }
    
      const dailylowfat = () =>{
        navigation.navigate('Dailylowfat')
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
                dailybalanced() ;
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
                dailylowcarb() ;
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
                dailylowfat() ;
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

export default DailyPlan

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