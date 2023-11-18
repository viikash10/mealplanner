import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DailyPlan from './src/components/DailyPlan';
import Weeklyplan from './src/components/Weeklyplan';
import MealPlanner from './src/screens/MealPlanner';
import Dailybalanced from './src/components/planner/Dailybalanced';
import Dailylowcarb from './src/components/planner/Dailylowcarb';
import Dailylowfat from './src/components/planner/Dailylowfat';
import Weeklybalanced from './src/components/planner/Weeklybalanced';
import Weeklylowcarb from './src/components/planner/Weeklylowcarb';
import Weeklylowfat from './src/components/planner/Weeklylowfat';


export default function App() {
  const Stack = createNativeStackNavigator() ;
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName='Home'>
   <Stack.Screen name='Home' component={HomeScreen} 
    options={{
               headerShown: false
            }}
    />
    
    <Stack.Screen name='Dailyplan' component={DailyPlan} 
    options={{
               headerShown: false
            }}
    />

<Stack.Screen name='Weeklyplan' component={Weeklyplan} 
    options={{
               headerShown: false
            }}
    />
<Stack.Screen name='Mealplanner' component={MealPlanner} 
    options={{
               headerShown: false
            }}
    />

    {/* for daily diets */}
<Stack.Screen name='Dailybalanced' component={Dailybalanced}
     options={{
               headerShown: false
            }}

/>

<Stack.Screen name='Dailylowcarb' component={Dailylowcarb}
     options={{
               headerShown: false
            }}

/>

<Stack.Screen name='Dailylowfat' component={Dailylowfat}
     options={{
               headerShown: false
            }}

/>

{/* for weekly diets */}

<Stack.Screen name='Weeklybalanced' component={Weeklybalanced}
     options={{
               headerShown: false
            }}
/>

<Stack.Screen name='Weeklylowcarb' component={Weeklylowcarb}
     options={{
               headerShown: false
            }}
            
/>

<Stack.Screen name='Weeklylowfat' component={Weeklylowfat}
     options={{
               headerShown: false
            }}
/>

  </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});