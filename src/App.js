import React, {Component} from 'react';
import { View, TextInput, Image,
         Dimensions, ScrollView, TouchableOpacity} 
         from 'react-native';   
import { Back, Card, Check } from './components';
import styles from './appStyle';

const window = Dimensions.get('window'); 
 
export default class App extends Component {
    constructor(){
        super();
        this.state={
            text:" birşeyler yaz",
            _done:true,
            _progress:true,
           lastIndex:0,
          } 
        this.doneCheck=this.doneCheck.bind(this);
        this.todoCheck=this.todoCheck.bind(this);
        this.refresh=this.refresh.bind(this);
        this.refreshDone=this.refreshDone.bind(this);
        this.Add=this.Add.bind(this); 
        this.items=[];
       
}   
    
   itemchange(items,item){
      items.push(item);
   }
   refresh(){
     const change=[];
     this.state.lastIndex=0; 
     this.items.map((item)=> ( 
        this.itemchange(change,{text:item.text,done:item.done,id:this.state.lastIndex,date:item.date}) ,
     this.state.lastIndex=this.state.lastIndex+1
        ));
        this.items=[];
      change.map((item)=> ( 
       this.itemchange(this.items,{text:item.text,done:item.done,id:item.id,date:item.date})
          ));
    this.setState({text:"Deleted"});
   }
   refreshDone(id){
      const item=this.items[id];
     this.items[id]={text:item.text,done:true,id:item.id,date:Date()	}
      
   this.setState({text:"Done"})
  }
   Add(){ 
     const value = { text : this.state.text , id :this.state.lastIndex , done:false};
    if(this.state.text!==""){  
      this.items.push(value);    
      this.setState({text:""})
      this.setState({lastIndex:this.state.lastIndex+1}) 
    }
  }
  todoCheck(){
    this.setState({_progress:!this.state._progress }); 
  }
  doneCheck(){
    this.setState({_done:!this.state._done });
  }
    render() { 
          return (   
            <View style={{alignItems:'center',flex:1}} >  
                <Back/>
          <View style={styles.topPart}>     
        <View style={styles.inputSave}>
         <TextInput  
           style={styles.textInput}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
         />    
         </View>    
         <TouchableOpacity style={styles.save} onPress={this.Add}>
         <Image style={{ height:window.width*0.12,width:window.width*0.12}}
                   source={require('./assets/plus.png')}/>
         </TouchableOpacity>
         </View> 
         <View style={styles.scroll}>
         <ScrollView  ref={component => this.index = component} > 
         {this.items.map((item,index )=> ( 
          <View >
            {this.state._done && item.done && (
                <Card
                  item={item}
                  items={this.items}
                  close={this.refresh}
                  done={this.refreshDone}
                  />
                  )}
            {this.state._progress && !item.done &&(
              <Card
                item={item}
                items={this.items} 
                close={this.refresh}
                done={this.refreshDone}
                 />
            )}  
            </View>
             ))}  
             </ScrollView>
             </View>
              <Check 
                     done={this.state._done}
                     progress={this.state._progress}
                     todo={this.todoCheck} 
                     finish={this.doneCheck}/>
                            
            </View>  
        );
    }z
} 
 