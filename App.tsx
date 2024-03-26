// import React from 'react';
// import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text, } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// const logoimg = require('./Assets/logo.png');
// const banner12 = require('./Assets/slider4.png');
// const banner2 = require('./Assets/slider1.png');
// const banner3 = require('./Assets/slider2.png');
// const App = () => {
//   const data =[
//     {Image:banner12},
//     {Image: banner2},
//     {Image: banner3},
//   ];
//   const renditem =({item})=>(
//     <View style={styles.slider}>
//       <Image source={item.Image} style = {styles.image}/>

//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//       data = {data}
//       renderItem= {renditem}
//       sliderWidth ={500}
//       itemWidth ={500}
//       autoplay ={true}
//       autoplayInterval ={2000}
//       loop ={true}
//       />
//     <Image style={{width:200, height:200}} source={logoimg}/>
//     <Text style={styles.title}>Welcome Back!</Text>
//     <TextInput style={styles.input} placeholder='Username'/>
//     <TextInput style={styles.input} placeholder='Password' secureTextEntry/>
//     <TouchableOpacity style={styles.loginbutton}>
//         <Text style={styles.buttontext}>
//             Login
//         </Text>
//     </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container:{

//     justifyContent:'center',
//     alignItems:'center',
// },

// title:{
//     fontSize:25,
//     color:'black',
//     fontWeight:'bold',
//     marginBottom:20,
// },
// input:{
//     width:'70%',
//     height:50,
//     borderColor:'#ccc',
//     borderRadius:15,
//     borderWidth:2,
//     marginBottom:20,
//     paddingHorizontal:20,
// },
// loginbutton:{
//     width:'50%',
//     height:30,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#007bff',
//     borderRadius:20,
// },
// buttontext:{
//     color:'#fff',
//     fontSize:20,
//     fontWeight:'bold'
// },
// slider:{
//   justifyContent:'center',
//   alignItems:'center'
// },
// image:{
//   width:'100%',
//   height:200,
// }

// });

// export default App;
//-----------------------------------
/*import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native';
const Logoimg =require('./Assets/logo.png');
const loginForm = require ("./Assets/components/loginForm.js")
const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>
          Header Explaination
        </Text>
      </View> 
      <View style={styles.content}>
        <View style={styles.sidebar}>
          <Text style={{color:'#ffffff', fontSize:30,}}>
            sidebar
          </Text>
      
        </View>
        <View style={styles.maincontent}>
        <Image style={{width:200, height:200}} source={Logoimg}/>
        <Text style={styles.title}>Welcome Back!</Text>
    <TextInput style={styles.input} placeholder='Username'/>
    <TextInput style={styles.input} placeholder='Password' secureTextEntry/>
    <TouchableOpacity style={styles.Loginbutton}>
        <Text style={styles.buttontext}>
            Login
        </Text>
    </TouchableOpacity>
          <Text>
            Main Content
          </Text>

        </View>
      </View>
      <View style={styles.footer}>
        <Text>
          Footer
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
 container:{
  flex:1,
  flexDirection:'column',
  backgroundColor:'yellow',

 },
 header:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'lightblue',
  height:50
 },
 headertext:{
  fontSize:20,
  fontWeight:'bold',
  color:'black'
 },
 content:{
  flexDirection:'row',
  flex:1,

 },
 sidebar:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'blue'
 },
 maincontent:{
  flex:2,
  justifyContent:'center',
  alignItems:'center',

 },
 footer:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
  height:50,
  backgroundColor:'lightblue'
 },
 title:{
  fontSize:25,
  color:'black',
  fontWeight:'bold',
  marginBottom:20,
},
input:{
  width:'80%',
  height:50,
  borderColor:'#ccc',
  borderRadius:15,
  borderWidth:2,
  marginBottom:20,
  paddingHorizontal:20,
},
Loginbutton:{
  width:'50%',
  height:30,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'teal',
  borderRadius:20,
},
buttontext:{
  color:'white',
  fontSize:20,
  fontWeight:'bold'},

});

export default App;
*/
//-----------------------------------

//header
import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
const logoimg = require('./Assets/logo.png');
import Carousel from 'react-native-snap-carousel';
const banner12 = require('./Assets/slider.png');
const banner2 = require('./Assets/slider2.png');
const banner3 = require('./Assets/slider2.png');
const App = () => {
  const data = [{Image: banner12}, {Image: banner2}, {Image: banner3}];
  const renditem = ({item}) => (
    <View style={styles.slider}>
      <Image source={item.Image} style={styles.image} />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headertext}>
          Subscribing 👑today to get amazing discount and exclusive parks
        </Text>
      </View>

      <View style={styles.header2}>
        <Text style={styles.logotext}> Logo</Text>
        <Image source={logoimg} style={{width: 50, height: 50, margin: 10}} />
      </View>

      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={styles.item}>Bus</Text>
        <Text style={styles.item}>Airlines</Text>
        <Text style={styles.item}>Trains</Text>
        <Text style={styles.item}>Events</Text>
        <Text style={styles.item}>Car Rental</Text>
        <Text style={styles.item}>Hotels</Text>
        <Text style={styles.item}>movies</Text>
        <Text style={styles.item}>Tours</Text>
        <Text style={styles.item}>Movies</Text>
      </View>

      <View style={styles.Carousel1}>
        <Carousel
          data={data}
          renderItem={renditem}
          sliderWidth={500}
          itemWidth={300}
          autoplay={true}
          autoplayInterval={4000}
          loop={true}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.book}>
          <Text>Book</Text>
        </View>
        <View >
          <Text>Rent</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 80,
  },
  headertext: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'white',
    padding: 5,
  },

  header2: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    alignContent:'space-between'
  },

  logotext: {
    fontSize: 20,
    color: 'black',
    padding: 5,
    textAlign: 'right',
    
  },

  item: {
    fontSize: 25,
    backgroundColor: 'teal',
    color: 'black',
    margin: 5,
    padding: 5,
    height: 120,
    width: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  Carousel1: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  slider: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: 80,

    marginTop: 7,
    marginBottom: 3,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'lightblue',
  },


book: {
  fontSize: 125,
  color: 'black',
  margin: 5,
  fontWeight:'bold',
  paddingRight:330,
  textAlign: 'center',
}, 


});

export default App;

//------------------------
//Boxes
// import React from 'react';
// import {View, StyleSheet, Text, } from 'react-native';
// const App = () => {
//   return (
//     <View style={{flex:1, flexDirection:'row', flexWrap:'wrap' }}>
//       <Text style={styles.item} >Bus</Text>
//       <Text style={styles.item} >Airlines</Text>
//       <Text style={styles.item} >Trains</Text>
//       <Text style={styles.item} >Events</Text>
//       <Text style={styles.item} >Car Rental</Text>
//       <Text style={styles.item} >Hotels</Text>
//       <Text style={styles.item} >movies</Text>
//       <Text style={styles.item} >Tours</Text>
//       <Text style={styles.item} >Movies</Text>

//     </View>

//   )
// }

// export default App;

// const styles = StyleSheet.create({

// item:{
// fontSize:25,
//   backgroundColor:'teal',
//   color: 'black',
//   margin:5,
//   padding:5,
//   height:120,
//   width:120,
//   textAlign:'center',
// textAlignVertical:'center'

// },

// })

//--------------------------------------------------------

// import React from 'react';
// import {View,Text,TextInput, TouchableOpacity,StyleSheet,Image, Button} from 'react-native';
// const logoimg = require("./Assets/logo.png");
// const talha = () => {

//   return(
// <View style={Styles.container}>
//  <Image source ={logoimg} style={{width:300, height:200}} />
//  <Text style={Styles.title}> Welcom Back </Text>
// <TextInput style={Styles.input} placeholder='Username'/>
// <TextInput style={Styles.input} placeholder='Password'/>
// <TextInput style={Styles.input} placeholder='Gmail'/>
// <TouchableOpacity>
//   <Text style={Styles.buttontext}>Login</Text>
// </TouchableOpacity>
// </View>);
// };

// const Styles = StyleSheet.create({

// container:{

// flex:1,
// justifyContent:'center',
// alignItems:'center',

// },

// title:{
// fontSize:30,
// fontWeight:'bold',
// padding:2,
// },

// input:{

//   borderWidth:2,
//   borderColor:'#ccc',
//   width:'70%',
//   height:50,
//   borderRadius:20,
//  marginBottom:20,

// },

// buttontext:{

//   color:'white',
//   fontWeight:'bold',
//   fontSize:26,
//   padding:5,
//   borderWidth:2,
//   borderRadius:20,
//  borderColor:'white',
// backgroundColor:'teal',

// }

// })

//  export default talha;
