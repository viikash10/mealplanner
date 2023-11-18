import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import Swiper from  'react-native-swiper'
import image1 from '../assets/OfferSliderImages/img1.png' ;
import image2 from '../assets/OfferSliderImages/img2.png' ;
import image3 from '../assets/OfferSliderImages/img3.png' ;
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ExerciseSlider = () => {
  return (
    <View style={styles.OfferSlider}>


     <Swiper autoplay={true} autoplayTimeout={5}>
        

        <View style={styles.slide}>
         <Image source={image2} style={styles.image} />
        </View>
      
      <View style={styles.slide}>
      <Image source={image3} style={styles.image} />
      </View>


     </Swiper>


    
    </View>
  )
}

export default ExerciseSlider

const styles = StyleSheet.create({
    OfferSlider: {
      width: '100%',
      height: 200,
      backgroundColor: Colors.col1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginVertical: 10
    },
    slide: {
      width: '100%',
      height: 200,
      backgroundColor: Colors.col1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 20,
    }
  
  })