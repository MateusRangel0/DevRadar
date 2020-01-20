import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps' 
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

function Main({ navigation }) {
    const [devs, setDevs] = useState([]);
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;
                
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }
        loadInitialPosition();
    }, []);

    async function loadDevs() {
        const { latitude, longitude } = currentRegion;

        const response = await api.get('/search', {
            params: {
                latitude,
                longitude,
                techs: 'ReactJS'
            }
        });

        setDevs(response.data);
    }

    function handleRegionChanged(region) {
        console.log(region);
        setCurrentRegion(region);
    }

    if(!currentRegion) {
        return null;
    }

    // Duas chaves, pois a primeira é pra incluir um código JS, a segunda pra declarar que é um
    // objeto JS
    return (
        // Não posso ter dois elementos um abaixo do outro sem ter um container por fora -> fragment
        <>
            
            <MapView onRegionChangeComplete={handleRegionChanged}
              initialRegion={currentRegion}
              style={styles.map}
            >
                <Marker coordinate={{ latitude: -7.2425696, longitude: -35.9008669 }}>
                    <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/29546699?s=460&v=4' }}/>

                    <Callout onPress={() => {
                        // navegação
                        navigation.navigate('Profile', { github_username: 'MateusRangel0' });
                    }}>
                        <View style={styles.callout}>
                            <Text style={styles.devName}>Mateus Rangel</Text>
                            <Text style={styles.devBio}>Computer Science graduating at Federal University of Campina Grande.</Text>
                            <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>           
            
            <View style={styles.searchForm}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar devs por techs..."
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                />
                <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
                       <MaterialIcons name="my-location" size={20} color="#FFF" />
                 </TouchableOpacity>
            </View>
        </>
    ); 
}

const styles = StyleSheet.create({
    map: {
        flex:1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#FFF'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },

    // colocar a posicao "bot" + fazer com que o teclado não atrapalhe a visualização
    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20, 
        fontSize: 16,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },

})

export default Main;