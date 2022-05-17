import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import { db } from '../../firebase'
import { TouchableOpacity } from "react-native-gesture-handler"
import { db } from '../../firebase'

const HEIGHT= 300, WIDTH = 200;
const screenWidth= Dimensions.get('window').width;
export default function BookOverview( props) {
  // const [UrlImg1, setUrlImg1] = useState('') 
  // const [UrlImg2, setUrlImg2] = useState('') 
  // const ReadBookFromDB = async () => {
  //   const querySnapshot = await getDocs(collection(db, "users"));

  //   querySnapshot.forEach((doc) => {
  //     //console.warn(`${doc.id} => ${doc.data(UID)}`);
  //   if (`${doc.id}`== userUID) {
  //     const { Address, Email, Name, Phonenumber } = doc.data();
  //     setname(Name)
      
  //   }
  //   });
  // }
  // useEffect(() => {
  //   ReadBookFromDB()

  // },[]);

  return (
    <TouchableOpacity style= {styles.main_view} onPress={}>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})