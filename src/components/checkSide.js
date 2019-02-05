import React from "react";        
import { Text, View,TouchableOpacity} from 'react-native';
import styles from './styles/backStyles';
class Check extends React.Component {

    render(){
        return(
            <View  style={styles.checkText}>
            <TouchableOpacity  onPress={this.props.finish}> 
             
             <Text style={styles.allText} > Done </Text>
              
            { !this.props.done &&(
                <Text style={styles.allTextno} >-------</Text>
             )} 
             </TouchableOpacity>
             <TouchableOpacity onPress={this.props.todo}>
             
             <Text style={styles.allText}> Progress  </Text>  
            
             { !this.props.progress &&(
             <Text style={styles.allTextno} > ---------  </Text>  
            )} 
            </TouchableOpacity>
            </View>
        );
    }
}  
    export default Check;