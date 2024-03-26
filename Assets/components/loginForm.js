import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const header = () => {
  return (
    <View style={Styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>Header Explaination</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 5,
  },

  
});

export default header;

/*import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image} from 'react-native';
const logoimg = require("./Assets/logo.png");

const App = () => {

  return(
<View style={Styles.container}>
<Image source ={logoimg} style={{width:300, height:200}} />
<Text style={Styles.title}> Welcom Back </Text>
<TextInput style={Styles.input} placeholder='Username'/>
<TextInput style={Styles.input} placeholder='Password'/>
<TextInput style={Styles.input} placeholder='Gmail'/>
<TouchableOpacity>
  <Text style={Styles.buttontext}>Login</Text>
</TouchableOpacity>
</View>);
};

const Styles = StyleSheet.create({

container:{

flex:1,
justifyContent:'center',
alignItems:'center',


},

title:{
fontSize:30,
fontWeight:'bold',
padding:5,
},

input:{

  borderWidth:2,
  borderColor:'#ccc',
  width:'70%',
  height:50,
  borderRadius:20,
 marginBottom:20,
  
},

buttontext:{

  color:'white',
  fontWeight:'bold',
  fontSize:26,
  padding:5,
  borderWidth:2,
  borderRadius:20,
 borderColor:'white',
backgroundColor:'teal',

}

})

 export default loginForm;*/
