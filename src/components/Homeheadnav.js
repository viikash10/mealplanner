import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../globals/style';

const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Fontisto name="nav-icon-list-a" size={20} color="grey" style={styles.myicon} />
            <View style={styles.containerin}>
                <Text style={styles.mytext}>Diet Planner</Text>
                
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('userprofile') }}>
                <FontAwesome5 name="user-circle" size={26} color="grey" style={styles.myicon} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#98EECC',
        marginTop: 20
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myicon: {
        color: 'white',
    },
    mytext: {
        color: 'grey',
        fontSize: 24,
        shadowOpacity: 10,
        fontWeight: 'bold'
    },
})