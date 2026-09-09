//import { View, Text, ImageBackground,  Image,  ScrollView, TouchableOpacity } from 'react-native';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';

const SolarSystemScreen = () => {

    // function untuk menampilkan alert ketika planet diklik
    const handleMercuryPress = () => {
        console.log('Mercury clicked');
        Alert.alert(
            'Alert',
            'You clicked Mercury!',
            [
                {
                    text: 'OK',
                }
            ]
        );
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>SOLAR SYSTEM</Text>

            <TouchableOpacity style={styles.card}
                onPress={handleMercuryPress}
            >

                <Image
                source={require('../../assets/images/mercury.png')}
                style={styles.planetImage}
                />

                <View style={styles.planetInfo}>
                    <Text style={styles.planetName}>
                        Mercury
                    </Text>

                    <Text style={styles.description}>
                        Mercury is the fastest planet, zipping around
                        the sun every 88 earth days
                    </Text>
                </View>

            </TouchableOpacity>



        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },

    // buat planet card
    card: {
        marginHorizontal: 15,
        padding: 10,

        backgroundColor: '#F7E1B3',

        borderWidth: 1,
        borderColor: '#6EBD72',
        borderRadius: 12,

        flexDirection: 'row',
        alignItems: 'center',
    },

    planetImage: {
        width: 60,
        height: 60,

        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 12,
    },

    planetInfo: {
        flex: 1,
    },

    planetName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },

    description: {
        fontSize: 12,
        lineHeight: 16,
    },
});


export default SolarSystemScreen;