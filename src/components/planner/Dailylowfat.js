import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import { lowFatDietPlan } from '../../models/Dailylowfat';


function getRandomUser(lowFatDietPlan) {
 // Get all the keys (user names) from the users object
 let userNames = Object.keys(lowFatDietPlan);
 
 // Generate a random index
 let randomIndex = Math.floor(Math.random() * userNames.length);
 
 // Get the random user name
 let randomUserName = userNames[randomIndex];
 
 // Return the random user
 return lowFatDietPlan[randomUserName];
}

const Dailybalanced = ({navigation}) => {



 const [user, setUser] = useState(getRandomUser(lowFatDietPlan));

 const displayMeal = (meal) => {
 return (
   <View style={styles.mealContainer}>
     <Text style={styles.mealName}>{meal}</Text>
     <Text style={styles.mealDetail}>Food: {user[meal].food}</Text>
     <Image style={styles.mealImage} source={{uri: user[meal].image}} />
     <Text style={styles.mealDetail}>Calories: {user[meal].calories}</Text>
   </View>
 );
 };

 const regeneratePlan = () => {
 setUser(getRandomUser(lowFatDietPlan));
 };

 return (
 <ScrollView style={styles.container}>
   {displayMeal('breakfast')}
   {displayMeal('lunch')}
   {displayMeal('dinner')}
   
   <Button title="Regenerate Plan" onPress={regeneratePlan} color="#29ADB2" />
 </ScrollView>
 );
}

export default Dailybalanced;

const styles = StyleSheet.create({
 container: {
 marginTop: 45,
 backgroundColor: '#F3F3F3',
 },
 mealContainer: {
 marginBottom: 20,
 backgroundColor: '#C5E898',
 padding: 20,
 borderRadius: 10,
 },
 mealName: {
 fontSize: 24,
 fontWeight: 'bold',
 marginBottom: 10,
 color: '#0766AD',
 },
 mealDetail: {
 fontSize: 18,
 marginBottom: 10,
 color: '#0766AD',
 },
 mealImage: {
 width: 100,
 height: 100,
 marginBottom: 10,
 },
});
