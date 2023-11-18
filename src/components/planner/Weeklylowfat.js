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

const WeeklyMealPlanner = ({navigation}) => {



 const [user, setUser] = useState(getRandomUser(lowFatDietPlan));

 const displayMeal = (meal, day) => {
 return (
 <View style={styles.mealContainer}>
   <Text style={styles.mealName}>{day} - {meal}</Text>
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
 {displayMeal('breakfast', 'Monday')}
 {displayMeal('lunch', 'Monday')}
 {displayMeal('dinner', 'Monday')}
 {displayMeal('breakfast', 'Tuesday')}
 {displayMeal('lunch', 'Tuesday')}
 {displayMeal('dinner', 'Tuesday')}
 {displayMeal('breakfast', 'Wednesday')}
 {displayMeal('lunch', 'Wednesday')}
 {displayMeal('dinner', 'Wednesday')}
 {displayMeal('breakfast', 'Thursday')}
 {displayMeal('lunch', 'Thursday')}
 {displayMeal('dinner', 'Thursday')}
 {displayMeal('breakfast', 'Friday')}
 {displayMeal('lunch', 'Friday')}
 {displayMeal('dinner', 'Friday')}
 {displayMeal('breakfast', 'Saturday')}
 {displayMeal('lunch', 'Saturday')}
 {displayMeal('dinner', 'Saturday')}
 {displayMeal('breakfast', 'Sunday')}
 {displayMeal('lunch', 'Sunday')}
 {displayMeal('dinner', 'Sunday')}
 <Button title="Regenerate Plan" onPress={regeneratePlan} color="#29ADB2" />
 </ScrollView>
 );
}

export default WeeklyMealPlanner;

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
