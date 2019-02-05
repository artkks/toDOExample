import {StyleSheet,Dimensions} from 'react-native'; 

const window = Dimensions.get('window'); 

const styles=StyleSheet.create({
    topPart:{
        justifyContent:"center",
        alignItems:"center",
       flexDirection:'row',   
       marginTop:window.height*0.1
    },     
    inputSave:{ 
        justifyContent:"center",
        alignItems:"center", 
        borderRadius:20, 
        width:window.width*0.7,
        height:window.height*0.1,
        backgroundColor:'white',
        elevation:15,
    },
    save:{ 
        height:window.width*0.16,
        width:window.width*0.16, 
        justifyContent:"center",
        alignItems:"center",
        elevation:18, 
        borderRadius:window.width*0.15,
        marginLeft:window.width*0.01
    },
    textInput:{
        height: window.width*0.1,
        width:window.width*0.65,
        borderBottomWidth:1,
        borderColor:'lightgrey' 
    },
    scroll: {
        borderRadius:15,
        borderRadius:10, 
        marginTop:window.height*0.005,
        padding:window.width*0.03,  
        elevation:9,  
        width:window.width*0.9, 
        height:window.height*0.64
    },
  
})

module.exports= styles;