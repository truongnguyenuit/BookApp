import { StyleSheet, Text, View,Dimensions, Image} from 'react-native'
import React, { useEffect,useState } from 'react';
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"



const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( { navigation, book } ) {
  const [img, setimg] = useState('')
  const [name, setname] = useState('') 
  const [author, setauthor] = useState('') 
  const [description, setdescription] = useState('')
//   const ReadBookFromDB = async () => {
//     const querySnapshot = await getDocs(collection(db, "books"));

//     querySnapshot.forEach((doc) => {
//       alert(`${doc.id} => ${doc.data()}`);
//     if (`${doc.id}`== book) {
//       const { img, name, author, description } = doc.data();
//       setimg(img)
//       setname(name)
//       setauthor(author)
//       setdescription(description)
//     }
//     });
//   }
  const HandleReadDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));

    querySnapshot.forEach((doc) => {
      //console.warn(`${doc.id} => ${doc.data(UID)}`);
    if (`${doc.id}`== userUID) {
      const { Address, Email, Name, Phonenumber } = doc.data();
      setname(Name)
      setemail(Email)
      setphoneNumber(Phonenumber)
      setaddress(Address)
    }
      

    });

  }
//   useEffect(() => {
//     ReadBookFromDB()
//   },[]);

  return (
    <TouchableOpacity style= {styles.main_view} onPress={HandleReadDB}>
      {/* <Image source ={{url:img}} style={styles.Coverimg}></Image> */}
      <Text>{book}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    main_view: {
      height: HEIGHT,
      width: screenWidth/2 -8,

    },
    Coverimg: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        alignSelf: 'center'
    }
})
// ,{ Img:img, Name:name, Author: author, Description: description}
// () => navigation.navigate('Book Details',{ Img:img, Name:name, Author: author, Description: description})