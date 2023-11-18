import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Weeklyplan from '../components/Weeklyplan';
import DailyPlan from '../components/DailyPlan';



const MealPlanner = ({navigation}) => {


  const opendailyplan = () => {
    navigation.navigate('Dailyplan')
  }

  const openweeklyplan = () => {
    navigation.navigate('Weeklyplan')
  }


  return (
    <View style={styles.container}>

<Text style={styles.head}>Plan Your Meal</Text>
      <View style={styles.card}>
          
          <TouchableOpacity style={styles.card1}
          onPress={()=>{opendailyplan()}}
          
          >
            <Text style={styles.txt}>Daily Plan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card1} onPress={()=>openweeklyplan()}>
            <Text style={styles.txt}>Weekly Plan</Text>
          </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default MealPlanner

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C3EDC0',
    width: '100%',
    elevation: 10,
    borderRadius: 10,
    marginTop: 20
  },
  head: {
    color: 'grey',
    fontSize: 27,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1
  },
 
  card:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card1: {
    width: '30%',
    height: 150,
    elevation: 20,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 15,
    borderRadius:  100
  },
  txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F31559',
    textAlign: 'center'
  }
})