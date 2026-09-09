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


    // list data planet
    const planets = [
        {
            name: 'Mercury',
            image: require('../../assets/images/mercury.png'),
            description: 'Mercury is the fastest planet, zipping around the sun every 88 earth days',

        },
        {
            name: 'Venus',
            image: require('../../assets/images/venus.png'),
            description: 'Venus is the hottest planet, with a thick atmosphere that traps heat from the sun',

        },
    ]

    // function untuk menampilkan alert ketika planet diklik
    const handlePlanetPress = (planet) => {
        console.log(`${planets.name} clicked!`);

        Alert.alert(
            'Alert',
            `You clicked ${planet.name}!`,
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

        <ScrollView
        showVerticalScrollIndicator={false}
        horizontal={false}
        >
            
            {planets.map((planet) => (

                <TouchableOpacity 
                    key={planet.name}
                    style={styles.card}
                    onPress={ () => handlePlanetPress(planet.name)}
                >

                    <Image
                    source={planet.image}
                    style={styles.planetImage}
                    />

                    <View style={styles.planetInfo}>

                        <Text style={styles.planetName}>
                            {planet.name}
                        </Text>

                        <Text style={styles.description}>
                            {planet.description}
                        </Text>
                    </View>


            </TouchableOpacity>




            ))}

            

        </ScrollView>



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
        marginBottom: 10,
    },

    // buat planet card
    card: {
        marginHorizontal: 15,
        marginBottom: 10,
        padding: 10,

        backgroundColor: '#F7E1B3',

        borderWidth: 1,
        borderColor: '#6EBD72',
        borderRadius: 12,

        flexDirection: 'row',
        alignItems: 'center',
        width: 'auto',
    },

    planetImage: {
        width: 60,
        height: 60,

        borderRadius: 30,

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