import {StyleSheet,Dimensions} from 'react-native'; 

const window = Dimensions.get('window'); 
const styles=StyleSheet.create({
    
    main:{   
        height:window.height*0.1, 
        flexDirection:'row', 
        borderRadius:15, 
        marginBottom:window.height*0.01 ,
        marginTop:window.height*0.01 ,
        justifyContent:'space-between',
        alignItems:'center'
    }, 
    Img:{
        marginLeft:window.width*0.01,
        marginRight:window.width*0.02,
        height:window.width*0.10,
        width:window.width*0.10
    },
    dateText:{
        zIndex:2,
        height:window.height*0.1,
        width:window.height*0.05,
        position:"absolute",
        top:0,
        left:window.height*0.075,
        color:"white",
        fontSize:window.height*0.02
    },
    dateBox : {
        marginLeft:window.height*0.065,
        width:window.width*0.2,
        backgroundColor:'#0ac2b4',
        height:window.height*0.1-2,
        opacity:0.5,
        borderRadius:10
    },
    dataText:{ 
        height:window.height*0.07,
        width:window.height*0.001, 
       
           }
});
module.exports=styles;