import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'
import calorieimage from '../assets/Trackerimages/Calorie.jpg'

const TrackersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.cardouthead}>Trackers</Text>
       <ScrollView style={styles.cardsout} horizontal>
        <TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.s1}>
              <Image source={calorieimage} style={styles.cardimgin}/>
              <Text style={styles.txt1}>Calorie Tracker</Text>
            </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.s1}>
            <Image source={calorieimage} style={styles.cardimgin}/>
              <Text style={styles.txt}>Nutrients Tracker</Text>
            </View>
            </View>
        </TouchableOpacity>


        <TouchableOpacity>
          <View style={styles.card}>
            <View style={styles.s1}>
            <Image source={calorieimage} style={styles.cardimgin}/>
              <Text style={styles.txt1}>Water Tracker</Text>
            </View>
            </View>
        </TouchableOpacity>

        

       </ScrollView>
    </View>
  )
}

export default TrackersScreen

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    color: colors.col1,
    width: '100%',
    marginBottom: 20
  },
  cardouthead: {
    color: colors.text3,
    width: '90%',
    fontSize: 33,
    fontWeight: '200',
    borderRadius: 10,
    marginHorizontal: 10
  },
  cardsout: {
    width: '100%',

  },
  card: {
    width:   130,
    height: 150,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    backgroundColor: colors.col1,
    marginVertical: 10
 },
 cardimgin: {
  width: '100%',
  height: 100,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10
},
s2: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center'
},
txt1: {
  fontSize: 18,
  color: colors.text3,
  marginHorizontal: 5,
  width: 150
},
txt: {
    fontSize: 25,
    color: colors.text2,
    marginRight: 10
  }
,
txt2: {
  fontSize: 20,
  color: colors.text2,
  marginRight: 10
},
s2in: {
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: 10
},
s2: {
  alignItems: 'center',
  position: 'absolute',
  bottom: 1,
  width: '100%'
},
buybtn: {
  backgroundColor: colors.text1,
  color: colors.col1,
  paddingHorizontal: 10,
  paddingVertical: 5,
  fontSize: 20,
  borderRadius: 10,
  width: '90%',
  textAlign: 'center',
},
txt: {
  textAlign: 'center',
  
}

})