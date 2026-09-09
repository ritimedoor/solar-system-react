//import { View, Text, ImageBackground,  Image,  ScrollView, TouchableOpacity } from 'react-native';

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

const SolarSystemScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>SOLAR SYSTEM</Text>



            // planet planet
            <View style={styles.card}>

                <View style={styles.planetImage}>
                    <Text>🌑</Text>
                </View>

                <View style={styles.planetInfo}>
                    <Text style={styles.planetName}>
                        Mercury
                    </Text>

                    <Text style={styles.description}>
                        Mercury is the fastest planet, zipping around
                        the sun every 88 earth days
                    </Text>
                </View>

            </View>



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