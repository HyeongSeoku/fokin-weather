import React from "react";
import {View, Text , StyleSheet} from "react-native";
import PropTypes from "prop-types"


export default function Weather({temp}){
    return(
        <View style={styles.container}>
        <Text>{temp}</Text>
        </View>
    );
}
//propTypes 주의 not "P"ropTypes
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Sand"
    ]).isRequired
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});

