import React from "react";       
import {Text, View, Image} from 'react-native'; 
import styles from './styles/backStyles';

 export class Back extends React.Component {

    render(){
        return(
            <View style={{position:'absolute',top:0,left:0}}> 
                <Image 
                style={styles.background}
                   source={require('../assets/back.jpg')}/>
                 
                <Text style={styles.text1}>
                 toDo LIST</Text>
                <Text style={styles.text2}> to Remember </Text>
            </View>
        );
    }
}  

module.exports= Back;