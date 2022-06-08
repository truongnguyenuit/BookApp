import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { Header } from 'react-native/Libraries/NewAppScreen';
import LikeButton from '../Components/LikeButton';
const screen_width = Dimensions.get('window').width;
const screen_height = Dimensions.get('window').height;
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from './StarRating'

import { db } from '../../firebase'
import { collection, addDoc, getDocs, doc, setDoc, query, where } from "firebase/firestore"
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function BookDetails({ route, navigation }) {
  const { Img, Name, Author, Description, Content } = route.params

  const handleLike = async () => {
    const citiesRef = collection(db, "likes");
    await setDoc(doc(citiesRef, Name), {
      img: Img,
      name: Name,
      author: Author,
      description: Description,
      content: Content,
      key: Name,
      UID: userUID,
    });
  }

  const [comment, setComment] = useState()
  const handleComment = async () => {
    const citiesRef = collection(db, "comments");
    await setDoc(doc(citiesRef), {
      name: Name,
      content: comment,
      userName: name,
    });
  }

  const [name, setName] = useState()
  const HandleReadDB = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      
      if (`${doc.id}` == userUID) {
        const { Name } = doc.data();
        setName(Name)
      }
    });
  }
  const [ccontent, setCcontent] = useState()
  const [nname, setNname] = useState()
  const [uuserName, setUuserName] = useState()
  const [arr, setarr] = useState([]);

  const ReadCommentFromDB = async () => {
    
    const q = query(collection(db, "comments"), where("name", "==", Name))
    const querySnapshot = await getDocs(q);

    setarr([])

    querySnapshot.forEach((doc) => {
      
      const { content, name, userName } = doc.data();
      
      setCcontent(content)
      setNname(name)
      setUuserName(userName)

      setarr(oldArray => [...oldArray, { cccontent: ccontent, nnname: nname, uuusername: uuserName }])
    });
  }

  useEffect(() => {
    HandleReadDB()
    ReadCommentFromDB()
  }, []);

  var userUID;
  var user = firebase.auth().currentUser;
  if (user)
    userUID = user.uid

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.imgContainer}>
          <Image
            source={{ url: Img }}
            resizeMode='stretch'
            style={styles.coverImg}
          >
          </Image>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={handleLike}>
          <LikeButton />
        </TouchableOpacity>

        <View style={styles.textview}>
          <Text style={styles.header}>{Name}</Text>
          <Text style={styles.author}>By: {Author}</Text>
          <Text style={styles.title}>Description:</Text>
          <Text style={styles.description}>{Description}</Text>
        </View>
        <View style={styles.buttoncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')}
          >

            <Text style={styles.buttontext}>
              Go Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('BookContent', { img: Img, name: Name, author: Author, content: Content })}
          >
            <Text style={styles.buttontext}>
              Start Read
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textComment}> Comment:</Text>

        <View style={styles.cardcontainer}>
          <TextInput
            style={styles.comment}
            value={comment}
            placeholder={'Your comment'}
            onChangeText={text => setComment(text)}
          >
          </TextInput>
          <TouchableOpacity
            style={styles.commentbutton}
            onPress={handleComment}
          >
            <Text style={styles.buttonText}>Comment</Text>
          </TouchableOpacity>
        </View>




        <View style={styles.commentContainer}>
          {arr.map((comment, key) => (
            <View
              style={styles.userComment}
              key={key}
            >
              <Text>{comment.content}</Text>
            </View>
          ))}
        </View>



      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {

  },
  imgContainer: {
    height: 300,
  },
  // top: {
  //   flex: 1,
  //   height: "90%",
  //   width: "100%"
  // },
  // bot: {
  //   height: "50%",
  //   width: "100%"
  // },
  coverImg: {
    width: "100%",
    height: "100%",
    alignSelf: 'center',

  },
  textview: {
    margin: 10
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  author: {
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginVertical: 10,
  },
  buttoncontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,

  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 50,
    paddingHorizontal: 30

  },
  buttontext: {
    fontWeight: 'bold',
    color: 'white'
  },
  btn: {
    position: 'absolute',
    marginTop: screen_height - 480,
    marginLeft: screen_width - 80,
  },
  cardcontainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  textComment: {
    fontWeight: 'bold',
    fontSize: 17,
    marginLeft: 10,
  },
  comment: {

    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: '#ff8c00',
    width: 292,
  },
  commentbutton: {
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  }


})