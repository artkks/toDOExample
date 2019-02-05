import React from "react";   
import {Animated, Text,  View,
        Image,TouchableOpacity,
        ScrollView,Dimensions} from 'react-native';
import styles from './styles/cardStyle';
const window = Dimensions.get('window'); 

 class Card extends React.Component {
   constructor(props){
    super(props);       
      this.state={ 
        allow:false,
        bye:false,   
      }      
      this.position = new Animated.ValueXY(0, 0);  
      this._animated= new Animated.Value(1);
      this.check=this.check.bind(this);
      this.trash=this.trash.bind(this);  
      this.bye=this.bye.bind(this);
     
    }   
    componentDidMount() {  
      this.position.setValue({x:window.width,y:0})
      Animated.spring(this.position, {
          toValue: { x:0, y:0},
          speed:2,
      }).start();  
     
       } 
         
     bye(){
      this.props.items.splice(this.props.item.id,1); 
      this.props.close();
     }
     trash(){        
      Animated.spring(this._animated, {
          toValue: 0,
          speed:5
      }).start(this.bye);  
     
      }  
     check(){ 
        this.props.item.done=true;
        this.props.done(this.props.item.id);   
      }   
     renderTime(){
      return(
      <View>
          {this.props.item.date}
      </View> 
      )
       } 
   render() { 
    return (
       <Animated.View style={[this.position.getLayout(),{opacity:this._animated}]}   >
        
          { !this.props.item.done &&(
           
           <View  style={[styles.main,
                { backgroundColor:this.props.item.done ?  "#0cd97e":"white"}]}>  
              <TouchableOpacity activeOpacity={1} onPressOut={this.check} 
                       style={[styles.Img,{opacity:0.7}]} >
              <Image style={styles.Img}
                   source={require('../assets/check.png')}/>
              </TouchableOpacity>  
              <ScrollView 
              contentContainerStyle={{ justifyContent:"center",
        alignItems:"center",}} style={styles.dataText}>
              <Text > {this.props.item.text} </Text> 
              </ScrollView>
              <TouchableOpacity activeOpacity={1} onPress={this.trash}
                        style={[styles.Img,{opacity:0.7}]} >
              <Image style={styles.Img}
                        source={require('../assets/trash.png')}/>
              </TouchableOpacity>
                
                </View>

          )}

          { this.props.item.done &&( 

            <View   style={[styles.main,
                   { backgroundColor: "#82a7a9",
                   borderColor:'#c5e3e0',borderWidth:1 }]}>   
              <View style={styles.dateBox}/> 
              <Text style={styles.dateText}>{this.props.item.date}</Text>
              
            <Text style={{color:"white"} }> {this.props.item.text} </Text>
               
              <TouchableOpacity activeOpacity={1} onPressOut={this.trash} 
                         style={[styles.Img,{opacity:0.7}]} >
              <Image style={styles.Img}
                        source={require('../assets/trash2.png')} />
                      
                </TouchableOpacity>
                </View>
          )}      
       
       </Animated.View>
    );
  }
}  
export default Card;
