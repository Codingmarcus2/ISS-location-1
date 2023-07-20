import React, { Component } from 'react';
import { Text, View, ImageBackground, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from "axios";

export default class IssLocationScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            location: {}
        }

    }
    getIssLocation = () => {
        axios.
       .get("https://api.wheretheiss.at/v1/satellites/25544")
            .then(response => {
                this.setState({ location: response.data })
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }



    componentDidMount() {
        this.getIssLocation()
    }


    render() {
        if (Object.keys(this.state.location).length === 0) {
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
            >
                <Text>Loading !! </Text>
            </View>
        }
        return (
            <View style={styles.container}>
                <SafeAreaView style={Styles.driodSafeArea} />
                <ImageBackground source={require('../assets/bg.png')} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleBar}>ISS Tracker App</Text>

                    </View>
                    <View style={styles.mapContainer}>
                        <MapView>
                        </MapView>
                    </View>
                    <ImageBackground />
            </View>

        )
    }
}




const styles = StyleSheet.create({
    container: {
        flex: 1

    },
    droidSafeArea: {
        marginTop: Platform.Os === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft
    }
}