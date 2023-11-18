import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react';
import BottomNav from '../components/BottomNav';
import { colors ,hr80 } from '../globals/style';
import { StatusBar } from 'expo-status-bar';
import Homeheadnav from '../components/Homeheadnav';
import DateScreen from './DateScreen';
import TrackersScreen from './TrackersScreen';
import { AntDesign } from '@expo/vector-icons';
import MealPlanner from './MealPlanner';
import ExerciseSlider from '../components/ExerciseSlider';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#98EECC'/>
    <Homeheadnav  navigation={navigation}/>
    <View style={styles.bottomnav}>
      <BottomNav navigation={navigation} />
    </View>
     
    <ScrollView style={styles.container1}>

    {/* search box */}
     <View style={styles.searchbox}>
     <AntDesign name="search1" size={24} color="black" style={
                    styles.searchicon
      } />
      <TextInput style={styles.input} placeholder="Search SyntHeim.com" />
     </View>



     

     <ExerciseSlider/>
     <MealPlanner navigation={navigation}/>
     {/* <TrackersScreen /> */}
     
    </ScrollView>


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  bottomnav: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.col1,
    zIndex: 20
},
searchbox: {
  flexDirection: 'row',
  width: '90%',
  backgroundColor: colors.col1,
  borderRadius: 30,
  alignItems: 'center',
  padding: 10,
  margin: 20,
  elevation: 10,
},
input: {
  marginLeft: 10,
  width: '90%',
  fontSize: 18,
  color: 'grey',
},
searchicon: {
  color: 'grey',
},
})