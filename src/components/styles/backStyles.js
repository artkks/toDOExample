import {StyleSheet,Dimensions} from 'react-native';  

const window = Dimensions.get('window'); 
const styles=StyleSheet.create({
   
    background:{
        height:window.height,
        width:window.width
   },
    text1:{
        position:'absolute',
        opacity:0.8,
        color:"white",
        fontSize:window.height*0.12,
        fontFamily:'Dirty Brush',
        top:window.height*0.02,
        left:window.width*0.12
    },
    text2:{
        position:'absolute',
        opacity:0.8,
        color:"white",
        fontSize:window.height*0.08,
        fontFamily:'Dirty Brush',
        top:window.height*0.8,
        left:window.width*0.35,
        rotation:330,
    },
    checkText:{
        zIndex:4,
        fontSize:30, 
        position:"absolute",
        top:window.height * 0.84,
        left:window.width * 0.7, 
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
    },
    allText:{
        fontSize:30,
        color:'white', 
        fontFamily:'Dirty Brush',
        margin:window.height*0.01 
    },
    allTextno:{ 
        position:'absolute',
        fontSize:40,
        color:'#b61905', 
        fontFamily:'Dirty Brush', 
        elevation:11,  
    }
})

module.exports = styles ;